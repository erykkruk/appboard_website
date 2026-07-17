"use client";

import {
	Download,
	FilePlus2,
	FolderOpen,
	LayoutTemplate,
	Loader2,
	Redo2,
	Save,
	Trash2,
	Undo2,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useSceneHistory } from "@/hooks/use-scene-history";
import {
	createSceneId,
	deleteSavedScene,
	loadSavedScenes,
	type SavedScene,
	upsertSavedScene,
} from "@/lib/free-editor-storage";
import {
	dedupeFontFamily,
	loadGoogleFont,
	registerCustomFont,
	sanitizeFontFamilyName,
} from "@/lib/scene-fonts";
import {
	applyOrientation,
	applyPanelCount,
	createDefaultAnnotation,
	createDefaultScene,
	createImageAnnotation,
	createShapeAnnotation,
	getDisplayTypeLabel,
	getPanelCount,
	getSceneOrientation,
	getTargetDimensionsFor,
	reorderById,
	type SceneOrientation,
} from "@/lib/screenshot-editor";
import {
	applyTemplate,
	SCENE_TEMPLATES,
	type SceneTemplate,
} from "@/lib/scene-templates";
import type {
	SceneAnnotation,
	SceneAnnotationType,
	SceneData,
	SceneShapeKind,
	SceneTextLayer,
} from "@/lib/scene-types";

import { LayersPanel, PropertiesPanel } from "./editor-panels";
import type { RenderImages } from "./render-scene";
import { SceneCanvas, type SceneCanvasHandle } from "./scene-canvas";
import { ScenePreview } from "./scene-preview";
import { useSceneImages } from "./use-scene-images";

// Store targets offered by the free editor. iOS App Store display types plus the
// flexible Google Play Android sizes — labels resolved via getDisplayTypeLabel.
const DISPLAY_TYPE_OPTIONS = [
	"APP_IPHONE_67",
	"APP_IPHONE_65",
	"APP_IPHONE_61",
	"APP_IPHONE_58",
	"APP_IPHONE_55",
	"APP_IPHONE_47",
	"APP_IPAD_PRO_129",
	"phone",
	"sevenInch",
	"tenInch",
];

const DEFAULT_DISPLAY_TYPE = "APP_IPHONE_67";

function readFileAsDataUrl(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = () => reject(reader.error);
		reader.readAsDataURL(file);
	});
}

/** Decode an image source just to read its natural aspect (height / width). */
function readImageAspect(src: string): Promise<number> {
	return new Promise((resolve) => {
		const img = new Image();
		img.onload = () =>
			resolve(img.naturalWidth > 0 ? img.naturalHeight / img.naturalWidth : 1);
		img.onerror = () => resolve(1);
		img.src = src;
	});
}

function blobToImage(blob: Blob): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const url = URL.createObjectURL(blob);
		const img = new Image();
		img.onload = () => {
			URL.revokeObjectURL(url);
			resolve(img);
		};
		img.onerror = () => {
			URL.revokeObjectURL(url);
			reject(new Error("Failed to decode exported image"));
		};
		img.src = url;
	});
}

function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob | null> {
	return new Promise((resolve) => {
		try {
			canvas.toBlob((blob) => resolve(blob), "image/png");
		} catch {
			resolve(null);
		}
	});
}

/**
 * Slice a wide panorama PNG into `panels` individual store screenshots on the
 * client. Each output is exactly panelWidth×panelHeight, matching the store
 * target size — the same split the backend does in the paid product.
 */
async function slicePanorama(
	fullBlob: Blob,
	panels: number,
	panelWidth: number,
	panelHeight: number,
): Promise<Blob[]> {
	const img = await blobToImage(fullBlob);
	const out: Blob[] = [];
	for (let i = 0; i < panels; i++) {
		const canvas = document.createElement("canvas");
		canvas.width = panelWidth;
		canvas.height = panelHeight;
		const ctx = canvas.getContext("2d");
		if (!ctx) continue;
		ctx.drawImage(
			img,
			i * panelWidth,
			0,
			panelWidth,
			panelHeight,
			0,
			0,
			panelWidth,
			panelHeight,
		);
		const blob = await canvasToBlob(canvas);
		if (blob) out.push(blob);
	}
	return out;
}

function triggerDownload(blob: Blob, filename: string): void {
	const url = URL.createObjectURL(blob);
	const anchor = document.createElement("a");
	anchor.href = url;
	anchor.download = filename;
	document.body.appendChild(anchor);
	anchor.click();
	anchor.remove();
	URL.revokeObjectURL(url);
}

function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function slugify(name: string): string {
	return (
		name
			.trim()
			.toLowerCase()
			.replace(/[^a-z0-9-_]+/g, "-")
			.replace(/^-+|-+$/g, "") || "scene"
	);
}

let textLayerSeq = 0;
function nextTextLayerId(): string {
	textLayerSeq += 1;
	return `text-${Date.now()}-${textLayerSeq}`;
}

let annotationSeq = 0;
function nextAnnotationId(): string {
	annotationSeq += 1;
	return `ann-${Date.now()}-${annotationSeq}`;
}

type StatusKind = "success" | "error";
interface Status {
	kind: StatusKind;
	message: string;
}

export function FreeScreenshotEditor() {
	const [displayType, setDisplayType] = useState(DEFAULT_DISPLAY_TYPE);
	const [scene, setScene, history] = useSceneHistory<SceneData>(() =>
		createDefaultScene(DEFAULT_DISPLAY_TYPE),
	);
	const [sceneName, setSceneName] = useState("New scene");
	const [sceneId, setSceneId] = useState<string | null>(null);
	const [selectedLayerId, setSelectedLayerId] = useState<string | null>(
		"__device",
	);
	const [screenshotSrc, setScreenshotSrc] = useState<string | undefined>(
		undefined,
	);
	const [templatesOpen, setTemplatesOpen] = useState(false);
	const [scenesOpen, setScenesOpen] = useState(false);
	const [googleFontOpen, setGoogleFontOpen] = useState(false);
	const [googleFontLoading, setGoogleFontLoading] = useState(false);
	const [downloading, setDownloading] = useState(false);
	const [status, setStatus] = useState<Status | null>(null);
	const [savedScenes, setSavedScenes] = useState<SavedScene[]>([]);

	const canvasRef = useRef<SceneCanvasHandle>(null);
	const bgFileRef = useRef<HTMLInputElement>(null);
	const screenshotFileRef = useRef<HTMLInputElement>(null);
	const imageLayerFileRef = useRef<HTMLInputElement>(null);
	const imageLayerTargetRef = useRef<string | null>(null);
	const fontFileRef = useRef<HTMLInputElement>(null);
	const fontTargetRef = useRef<string | null>(null);
	const googleFontTargetRef = useRef<string | null>(null);

	// Auto-dismiss the status banner.
	useEffect(() => {
		if (!status) return;
		const timer = setTimeout(() => setStatus(null), 4000);
		return () => clearTimeout(timer);
	}, [status]);

	const notify = useCallback((kind: StatusKind, message: string) => {
		setStatus({ kind, message });
	}, []);

	const loaded = useSceneImages(scene, screenshotSrc);
	const renderImages = useMemo<RenderImages>(
		() => ({
			background: loaded.background
				? {
						source: loaded.background.element,
						width: loaded.background.width,
						height: loaded.background.height,
					}
				: undefined,
			screenshot: loaded.screenshot
				? {
						source: loaded.screenshot.element,
						width: loaded.screenshot.width,
						height: loaded.screenshot.height,
					}
				: undefined,
			bezel: loaded.bezel
				? {
						source: loaded.bezel.element,
						width: loaded.bezel.width,
						height: loaded.bezel.height,
					}
				: undefined,
			annotations: loaded.annotations
				? Object.fromEntries(
						Object.entries(loaded.annotations).map(([id, img]) => [
							id,
							{ source: img.element, width: img.width, height: img.height },
						]),
					)
				: undefined,
		}),
		[loaded.background, loaded.screenshot, loaded.bezel, loaded.annotations],
	);

	const orientation = getSceneOrientation(scene);
	const panels = getPanelCount(scene);
	const panelWidth = Math.round(scene.width / panels);
	const panelHeight = scene.height;

	const { undo, redo } = history;
	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (!e.metaKey && !e.ctrlKey) return;
			const key = e.key.toLowerCase();
			if (key !== "z" && key !== "y") return;
			const target = e.target as HTMLElement | null;
			if (
				target &&
				(target.tagName === "INPUT" ||
					target.tagName === "TEXTAREA" ||
					target.isContentEditable)
			) {
				return;
			}
			e.preventDefault();
			if (key === "y" || e.shiftKey) redo();
			else undo();
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [undo, redo]);

	const patchScene = useCallback(
		(patch: Partial<SceneData>) => {
			setScene((prev) => ({ ...prev, ...patch }));
		},
		[setScene],
	);

	const patchTextLayer = useCallback(
		(id: string, patch: Partial<SceneTextLayer>) => {
			setScene((prev) => ({
				...prev,
				textLayers: prev.textLayers.map((l) =>
					l.id === id ? { ...l, ...patch } : l,
				),
			}));
		},
		[setScene],
	);

	const moveTextLayer = useCallback(
		(id: string, x: number, y: number) => {
			setScene((prev) => ({
				...prev,
				textLayers: prev.textLayers.map((l) =>
					l.id === id ? { ...l, x, y } : l,
				),
			}));
		},
		[setScene],
	);

	const addTextLayer = useCallback(() => {
		const id = nextTextLayerId();
		setScene((prev) => ({
			...prev,
			textLayers: [
				...prev.textLayers,
				{
					id,
					text: "New text",
					x: 0.5,
					y: 0.2,
					fontFamily: "Inter, system-ui, sans-serif",
					fontSize: Math.round(prev.height * 0.035),
					color: "#ffffff",
					align: "center",
					weight: 600,
				},
			],
		}));
		setSelectedLayerId(id);
	}, [setScene]);

	const addEmoji = useCallback(
		(emoji: string) => {
			const id = nextTextLayerId();
			setScene((prev) => ({
				...prev,
				textLayers: [
					...prev.textLayers,
					{
						align: "center" as const,
						color: "#ffffff",
						doNotTranslate: true,
						fontFamily: "Inter, system-ui, sans-serif",
						fontSize: Math.round(prev.height * 0.07),
						id,
						text: emoji,
						x: 0.5,
						y: 0.4,
					},
				],
			}));
			setSelectedLayerId(id);
		},
		[setScene],
	);

	const deleteTextLayer = useCallback(
		(id: string) => {
			setScene((prev) => ({
				...prev,
				textLayers: prev.textLayers.filter((l) => l.id !== id),
			}));
			setSelectedLayerId((cur) => (cur === id ? null : cur));
		},
		[setScene],
	);

	const patchAnnotation = useCallback(
		(id: string, patch: Partial<SceneAnnotation>) => {
			setScene((prev) => ({
				...prev,
				annotations: (prev.annotations ?? []).map((a) =>
					a.id === id ? ({ ...a, ...patch } as SceneAnnotation) : a,
				),
			}));
		},
		[setScene],
	);

	const moveAnnotation = useCallback(
		(id: string, x: number, y: number) => {
			setScene((prev) => ({
				...prev,
				annotations: (prev.annotations ?? []).map((a) =>
					a.id === id ? { ...a, x, y } : a,
				),
			}));
		},
		[setScene],
	);

	const moveCalloutTarget = useCallback(
		(id: string, targetX: number, targetY: number) => {
			setScene((prev) => ({
				...prev,
				annotations: (prev.annotations ?? []).map((a) =>
					a.id === id && a.type === "callout"
						? { ...a, targetX, targetY }
						: a,
				),
			}));
		},
		[setScene],
	);

	const addAnnotation = useCallback(
		(type: SceneAnnotationType) => {
			const id = nextAnnotationId();
			setScene((prev) => ({
				...prev,
				annotations: [
					...(prev.annotations ?? []),
					createDefaultAnnotation(type, prev, id),
				],
			}));
			setSelectedLayerId(id);
		},
		[setScene],
	);

	const addShape = useCallback(
		(shape: SceneShapeKind) => {
			const id = nextAnnotationId();
			setScene((prev) => ({
				...prev,
				annotations: [
					...(prev.annotations ?? []),
					createShapeAnnotation(id, shape, prev),
				],
			}));
			setSelectedLayerId(id);
		},
		[setScene],
	);

	const deleteAnnotation = useCallback(
		(id: string) => {
			setScene((prev) => ({
				...prev,
				annotations: (prev.annotations ?? []).filter((a) => a.id !== id),
			}));
			setSelectedLayerId((cur) => (cur === id ? null : cur));
		},
		[setScene],
	);

	const reorderTextLayer = useCallback(
		(id: string, delta: -1 | 1) => {
			setScene((prev) => ({
				...prev,
				textLayers: reorderById(prev.textLayers, id, delta),
			}));
		},
		[setScene],
	);

	const reorderAnnotation = useCallback(
		(id: string, delta: -1 | 1) => {
			setScene((prev) => ({
				...prev,
				annotations: reorderById(prev.annotations ?? [], id, delta),
			}));
		},
		[setScene],
	);

	const nudge = (v: number) => Math.min(v + 0.03, 0.97);

	const duplicateTextLayer = useCallback(
		(id: string) => {
			const newId = nextTextLayerId();
			setScene((prev) => {
				const source = prev.textLayers.find((l) => l.id === id);
				if (!source) return prev;
				return {
					...prev,
					textLayers: [
						...prev.textLayers,
						{ ...source, id: newId, x: nudge(source.x), y: nudge(source.y) },
					],
				};
			});
			setSelectedLayerId(newId);
		},
		[setScene],
	);

	const duplicateAnnotation = useCallback(
		(id: string) => {
			const newId = nextAnnotationId();
			setScene((prev) => {
				const source = (prev.annotations ?? []).find((a) => a.id === id);
				if (!source) return prev;
				const copy: SceneAnnotation =
					source.type === "callout"
						? {
								...source,
								id: newId,
								targetX: nudge(source.targetX),
								targetY: nudge(source.targetY),
								x: nudge(source.x),
								y: nudge(source.y),
							}
						: { ...source, id: newId, x: nudge(source.x), y: nudge(source.y) };
				return { ...prev, annotations: [...(prev.annotations ?? []), copy] };
			});
			setSelectedLayerId(newId);
		},
		[setScene],
	);

	const moveDevice = useCallback(
		(offsetX: number, offsetY: number) => {
			setScene((prev) =>
				prev.device
					? { ...prev, device: { ...prev.device, offsetX, offsetY } }
					: prev,
			);
		},
		[setScene],
	);

	const handleAddImageLayer = useCallback(() => {
		imageLayerTargetRef.current = null;
		imageLayerFileRef.current?.click();
	}, []);

	const handleReplaceAnnotationImage = useCallback((id: string) => {
		imageLayerTargetRef.current = id;
		imageLayerFileRef.current?.click();
	}, []);

	const handleImageLayerFile = async (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const file = e.target.files?.[0];
		e.target.value = "";
		if (!file) return;
		const dataUrl = await readFileAsDataUrl(file);
		const aspect = await readImageAspect(dataUrl);
		const targetId = imageLayerTargetRef.current;
		imageLayerTargetRef.current = null;
		if (targetId) {
			setScene((prev) => ({
				...prev,
				annotations: (prev.annotations ?? []).map((a) =>
					a.id === targetId && a.type === "image"
						? { ...a, url: dataUrl, aspect }
						: a,
				),
			}));
			return;
		}
		const id = nextAnnotationId();
		setScene((prev) => ({
			...prev,
			annotations: [
				...(prev.annotations ?? []),
				createImageAnnotation(id, dataUrl, aspect),
			],
		}));
		setSelectedLayerId(id);
	};

	const handleUploadFont = useCallback(() => {
		fontTargetRef.current = selectedLayerId;
		fontFileRef.current?.click();
	}, [selectedLayerId]);

	const handleAddGoogleFont = useCallback(() => {
		googleFontTargetRef.current = selectedLayerId;
		setGoogleFontOpen(true);
	}, [selectedLayerId]);

	const handleGoogleFontSubmit = async (family: string) => {
		const name = family.trim();
		if (!name) return;
		setGoogleFontLoading(true);
		const ok = await loadGoogleFont(name);
		setGoogleFontLoading(false);
		if (!ok) {
			notify("error", `"${name}" was not found on Google Fonts`);
			return;
		}
		const targetId = googleFontTargetRef.current;
		googleFontTargetRef.current = null;
		setScene((prev) => ({
			...prev,
			googleFonts: (prev.googleFonts ?? []).includes(name)
				? prev.googleFonts
				: [...(prev.googleFonts ?? []), name],
			textLayers: targetId
				? prev.textLayers.map((l) =>
						l.id === targetId ? { ...l, fontFamily: name } : l,
					)
				: prev.textLayers,
		}));
		setGoogleFontOpen(false);
		notify("success", `Google Font "${name}" added`);
	};

	const handleFontFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		e.target.value = "";
		if (!file) return;
		try {
			const dataUrl = await readFileAsDataUrl(file);
			const family = dedupeFontFamily(
				sanitizeFontFamilyName(file.name),
				(scene.customFonts ?? []).map((f) => f.family),
			);
			const font = { dataUrl, family };
			await registerCustomFont(font);
			const targetId = fontTargetRef.current;
			fontTargetRef.current = null;
			setScene((prev) => ({
				...prev,
				customFonts: [...(prev.customFonts ?? []), font],
				textLayers: targetId
					? prev.textLayers.map((l) =>
							l.id === targetId ? { ...l, fontFamily: family } : l,
						)
					: prev.textLayers,
			}));
			notify("success", `Font "${family}" added`);
		} catch {
			notify("error", "Failed to load the font file");
		}
	};

	const handleBackgroundFile = async (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const file = e.target.files?.[0];
		e.target.value = "";
		if (!file) return;
		const dataUrl = await readFileAsDataUrl(file);
		patchScene({ background: { type: "image", value: dataUrl } });
	};

	const handleScreenshotFile = async (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const file = e.target.files?.[0];
		e.target.value = "";
		if (!file) return;
		const dataUrl = await readFileAsDataUrl(file);
		setScreenshotSrc(dataUrl);
		patchScene({ screenshot: { ...scene.screenshot, url: dataUrl } });
	};

	const handleApplyTemplate = useCallback(
		(template: SceneTemplate) => {
			setScene((prev) => applyTemplate(template, prev, displayType));
			setSelectedLayerId("__device");
			setTemplatesOpen(false);
			notify("success", `Template "${template.name}" applied`);
		},
		[displayType, notify, setScene],
	);

	const handlePanelsChange = useCallback(
		(value: string) => {
			const count = Number.parseInt(value, 10);
			if (!Number.isFinite(count) || count < 1) return;
			setScene((prev) => applyPanelCount(prev, displayType, count));
		},
		[displayType, setScene],
	);

	const handleOrientationChange = useCallback(
		(value: string) => {
			setScene((prev) =>
				applyOrientation(prev, displayType, value as SceneOrientation),
			);
		},
		[displayType, setScene],
	);

	const handleDisplayTypeChange = useCallback(
		(value: string) => {
			setDisplayType(value);
			setScene((prev) => {
				const [targetWidth, targetHeight] = getTargetDimensionsFor(
					value,
					getSceneOrientation(prev),
				);
				return {
					...prev,
					height: targetHeight,
					width: targetWidth * getPanelCount(prev),
				};
			});
		},
		[setScene],
	);

	const handleNewScene = useCallback(() => {
		setScene(createDefaultScene(displayType));
		setSceneName("New scene");
		setSceneId(null);
		setScreenshotSrc(undefined);
		setSelectedLayerId("__device");
		history.reset();
		notify("success", "Started a new scene");
	}, [displayType, history, notify, setScene]);

	const handleSave = useCallback(() => {
		const id = sceneId ?? createSceneId();
		const next = upsertSavedScene({
			displayType,
			id,
			name: sceneName.trim() || "Untitled scene",
			scene,
			updatedAt: Date.now(),
		});
		setSceneId(id);
		setSavedScenes(next);
		notify("success", "Scene saved to this browser");
	}, [displayType, notify, scene, sceneId, sceneName]);

	const handleOpenScenes = useCallback(() => {
		setSavedScenes(loadSavedScenes());
		setScenesOpen(true);
	}, []);

	const handleLoadScene = useCallback(
		(saved: SavedScene) => {
			setScene(saved.scene);
			setSceneName(saved.name);
			setSceneId(saved.id);
			setDisplayType(saved.displayType);
			setScreenshotSrc(saved.scene.screenshot?.url);
			setSelectedLayerId("__device");
			history.reset();
			setScenesOpen(false);
			notify("success", `Loaded "${saved.name}"`);
		},
		[history, notify, setScene],
	);

	const handleDeleteScene = useCallback(
		(id: string) => {
			const next = deleteSavedScene(id);
			setSavedScenes(next);
			if (sceneId === id) setSceneId(null);
		},
		[sceneId],
	);

	const handleDownload = useCallback(async () => {
		setDownloading(true);
		try {
			const blob = await canvasRef.current?.exportPng();
			if (!blob) {
				notify(
					"error",
					"Cannot export — a background/image comes from a remote source without CORS. Upload it as a local file.",
				);
				return;
			}
			const base = slugify(sceneName);
			if (panels > 1) {
				const slices = await slicePanorama(
					blob,
					panels,
					panelWidth,
					panelHeight,
				);
				for (let i = 0; i < slices.length; i++) {
					triggerDownload(slices[i], `${base}-${i + 1}.png`);
					await sleep(250);
				}
				notify(
					"success",
					`Downloaded ${slices.length} panels (${panelWidth}×${panelHeight}px each)`,
				);
			} else {
				triggerDownload(blob, `${base}.png`);
				notify("success", `Downloaded ${panelWidth}×${panelHeight}px PNG`);
			}
		} catch {
			notify("error", "Failed to export the image");
		} finally {
			setDownloading(false);
		}
	}, [notify, panelHeight, panelWidth, panels, sceneName]);

	return (
		<div className="flex h-[calc(100vh-4rem)] min-h-[600px] flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
			<div className="flex flex-wrap items-center gap-2 border-b border-[var(--color-line)] px-3 py-2.5">
				<Input
					value={sceneName}
					onChange={(e) => setSceneName(e.target.value)}
					className="h-8 max-w-[180px]"
					placeholder="Scene name"
					aria-label="Scene name"
				/>
				<Select value={displayType} onValueChange={handleDisplayTypeChange}>
					<SelectTrigger className="h-8 w-[170px]" size="sm">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{DISPLAY_TYPE_OPTIONS.map((dt) => (
							<SelectItem key={dt} value={dt}>
								{getDisplayTypeLabel(dt)}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<Select value={orientation} onValueChange={handleOrientationChange}>
					<SelectTrigger className="h-8 w-[120px]" size="sm">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="portrait">Portrait</SelectItem>
						<SelectItem value="landscape">Landscape</SelectItem>
					</SelectContent>
				</Select>
				<Select value={String(panels)} onValueChange={handlePanelsChange}>
					<SelectTrigger className="h-8 w-[140px]" size="sm">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="1">Single screen</SelectItem>
						{[2, 3, 4, 5].map((n) => (
							<SelectItem key={n} value={String(n)}>
								Panorama × {n}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<span className="hidden text-xs text-[var(--color-muted)] sm:inline">
					{panelWidth}×{panelHeight}px{panels > 1 ? ` × ${panels}` : ""}
				</span>

				<div className="ml-auto flex items-center gap-1.5">
					<Button
						variant="ghost"
						size="icon"
						onClick={undo}
						disabled={!history.canUndo}
						aria-label="Undo (Cmd+Z)"
						title="Undo (Cmd+Z)"
					>
						<Undo2 className="h-4 w-4" />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						onClick={redo}
						disabled={!history.canRedo}
						aria-label="Redo (Cmd+Shift+Z)"
						title="Redo (Cmd+Shift+Z)"
					>
						<Redo2 className="h-4 w-4" />
					</Button>
					<Button variant="outline" size="sm" onClick={() => setTemplatesOpen(true)}>
						<LayoutTemplate className="h-4 w-4" />
						<span className="hidden md:inline">Templates</span>
					</Button>
					<Button variant="outline" size="sm" onClick={handleNewScene}>
						<FilePlus2 className="h-4 w-4" />
						<span className="hidden md:inline">New</span>
					</Button>
					<Button variant="outline" size="sm" onClick={handleOpenScenes}>
						<FolderOpen className="h-4 w-4" />
						<span className="hidden md:inline">My scenes</span>
					</Button>
					<Button variant="outline" size="sm" onClick={handleSave}>
						<Save className="h-4 w-4" />
						<span className="hidden md:inline">Save</span>
					</Button>
					<Button size="sm" onClick={handleDownload} disabled={downloading}>
						{downloading ? (
							<Loader2 className="h-4 w-4 animate-spin" />
						) : (
							<Download className="h-4 w-4" />
						)}
						<span className="hidden md:inline">Download PNG</span>
					</Button>
				</div>
			</div>

			<div className="flex min-h-0 flex-1">
				<LayersPanel
					scene={scene}
					selectedLayerId={selectedLayerId}
					onSelectLayer={setSelectedLayerId}
					onAddText={addTextLayer}
					onDeleteText={deleteTextLayer}
					onAddAnnotation={addAnnotation}
					onAddShape={addShape}
					onAddImage={handleAddImageLayer}
					onDeleteAnnotation={deleteAnnotation}
					onDuplicateText={duplicateTextLayer}
					onDuplicateAnnotation={duplicateAnnotation}
					onReorderText={reorderTextLayer}
					onReorderAnnotation={reorderAnnotation}
					onAddEmoji={addEmoji}
				/>

				<div className="flex min-w-0 flex-1 items-center justify-center bg-[var(--color-surface)] p-6">
					<SceneCanvas
						ref={canvasRef}
						scene={scene}
						images={renderImages}
						selectedLayerId={selectedLayerId}
						onSelectLayer={setSelectedLayerId}
						onMoveLayer={moveTextLayer}
						onMoveAnnotation={moveAnnotation}
						onMoveCalloutTarget={moveCalloutTarget}
						onMoveDevice={moveDevice}
					/>
				</div>

				<PropertiesPanel
					scene={scene}
					selectedLayerId={selectedLayerId}
					onPatchScene={patchScene}
					onPatchTextLayer={patchTextLayer}
					onPatchAnnotation={patchAnnotation}
					onPickBackgroundImage={() => bgFileRef.current?.click()}
					onPickScreenshot={() => screenshotFileRef.current?.click()}
					onUploadFont={handleUploadFont}
					onAddGoogleFont={handleAddGoogleFont}
					onReplaceAnnotationImage={handleReplaceAnnotationImage}
					onDeleteAnnotation={deleteAnnotation}
				/>
			</div>

			<input
				ref={bgFileRef}
				type="file"
				accept="image/*"
				className="hidden"
				onChange={handleBackgroundFile}
			/>
			<input
				ref={screenshotFileRef}
				type="file"
				accept="image/*"
				className="hidden"
				onChange={handleScreenshotFile}
			/>
			<input
				ref={imageLayerFileRef}
				type="file"
				accept="image/*"
				className="hidden"
				onChange={handleImageLayerFile}
			/>
			<input
				ref={fontFileRef}
				type="file"
				accept=".ttf,.otf,.woff,.woff2"
				className="hidden"
				onChange={handleFontFile}
			/>

			{status && (
				<div
					role="status"
					className={`pointer-events-none fixed bottom-4 left-1/2 z-[60] -translate-x-1/2 rounded-md px-4 py-2 text-sm shadow-lg ${
						status.kind === "error"
							? "bg-[var(--color-destructive)] text-white"
							: "bg-[var(--color-primary)] text-white"
					}`}
				>
					{status.message}
				</div>
			)}

			<TemplateGalleryDialog
				open={templatesOpen}
				onOpenChange={setTemplatesOpen}
				displayType={displayType}
				onPick={handleApplyTemplate}
			/>

			<GoogleFontDialog
				open={googleFontOpen}
				onOpenChange={setGoogleFontOpen}
				loading={googleFontLoading}
				onSubmit={handleGoogleFontSubmit}
			/>

			<MyScenesDialog
				open={scenesOpen}
				onOpenChange={setScenesOpen}
				scenes={savedScenes}
				onLoad={handleLoadScene}
				onDelete={handleDeleteScene}
			/>
		</div>
	);
}

/** Live-thumbnail gallery of the built-in templates for the current device. */
function TemplateGalleryDialog({
	open,
	onOpenChange,
	displayType,
	onPick,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	displayType: string;
	onPick: (template: SceneTemplate) => void;
}) {
	const previews = useMemo(
		() =>
			open
				? SCENE_TEMPLATES.map((template) => ({
						scene: template.build(displayType),
						template,
					}))
				: [],
		[open, displayType],
	);
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-4xl bg-[var(--color-panel)]">
				<DialogHeader>
					<DialogTitle>Scene templates</DialogTitle>
					<DialogDescription>
						Applying a template replaces the current layout. Your screenshot and
						fonts are kept.
					</DialogDescription>
				</DialogHeader>
				<div className="grid max-h-[65vh] grid-cols-2 gap-3 overflow-y-auto p-1 sm:grid-cols-4">
					{previews.map(({ template, scene }) => (
						<button
							key={template.id}
							type="button"
							onClick={() => onPick(template)}
							className="group flex flex-col items-center gap-1.5 rounded-lg border border-[var(--color-line)] p-2 transition-colors hover:border-[var(--color-accent)] hover:bg-white/5"
						>
							<ScenePreview scene={scene} className="max-h-56" />
							<span className="text-xs font-medium">{template.name}</span>
							<span className="text-center text-[10px] text-[var(--color-muted)]">
								{template.description}
							</span>
						</button>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
}

/** Minimal add-Google-Font prompt (any family name from fonts.google.com). */
function GoogleFontDialog({
	open,
	onOpenChange,
	loading,
	onSubmit,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	loading: boolean;
	onSubmit: (family: string) => void;
}) {
	const [family, setFamily] = useState("");
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-sm bg-[var(--color-panel)]">
				<DialogHeader>
					<DialogTitle>Add Google Font</DialogTitle>
				</DialogHeader>
				<form
					className="flex flex-col gap-3"
					onSubmit={(e) => {
						e.preventDefault();
						onSubmit(family);
					}}
				>
					<div className="flex flex-col gap-1.5">
						<Label htmlFor="google-font-name" className="text-xs">
							Font name (as on fonts.google.com)
						</Label>
						<Input
							id="google-font-name"
							value={family}
							placeholder="e.g. Luckiest Guy"
							autoFocus
							onChange={(e) => setFamily(e.target.value)}
						/>
					</div>
					<Button type="submit" disabled={loading || !family.trim()}>
						{loading ? (
							<>
								<Loader2 className="h-4 w-4 animate-spin" /> Loading…
							</>
						) : (
							"Add font"
						)}
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}

/** Load or delete scenes saved to this browser's localStorage. */
function MyScenesDialog({
	open,
	onOpenChange,
	scenes,
	onLoad,
	onDelete,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	scenes: SavedScene[];
	onLoad: (saved: SavedScene) => void;
	onDelete: (id: string) => void;
}) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl bg-[var(--color-panel)]">
				<DialogHeader>
					<DialogTitle>My scenes</DialogTitle>
					<DialogDescription>
						Saved in this browser only. Nothing is uploaded to a server.
					</DialogDescription>
				</DialogHeader>
				{scenes.length === 0 ? (
					<p className="py-10 text-center text-sm text-[var(--color-muted)]">
						No saved scenes yet. Design something and press Save.
					</p>
				) : (
					<div className="grid max-h-[60vh] grid-cols-2 gap-3 overflow-y-auto p-1 sm:grid-cols-4">
						{scenes.map((saved) => (
							<div
								key={saved.id}
								className="flex flex-col items-center gap-1.5 rounded-lg border border-[var(--color-line)] p-2"
							>
								<button
									type="button"
									onClick={() => onLoad(saved)}
									className="flex flex-col items-center gap-1.5"
									aria-label={`Load ${saved.name}`}
								>
									<ScenePreview scene={saved.scene} className="max-h-44" />
									<span className="line-clamp-1 text-xs font-medium">
										{saved.name}
									</span>
								</button>
								<span className="text-[10px] text-[var(--color-muted)]">
									{getDisplayTypeLabel(saved.displayType)}
								</span>
								<Button
									variant="outline"
									size="sm"
									className="h-6 px-2 text-[11px] text-red-400 hover:text-red-500"
									onClick={() => onDelete(saved.id)}
								>
									<Trash2 className="h-3.5 w-3.5" />
									Delete
								</Button>
							</div>
						))}
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}
