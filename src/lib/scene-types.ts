// Scene data model for the free screenshot editor. Ported verbatim from the
// admin panel (appboard_web `src/lib/types.ts`) so the renderer, export and
// panels behave identically. The editor owns rendering/export; here the scene
// is persisted only to localStorage (no backend).

export type SceneBackgroundType = "color" | "gradient" | "image";
export type SceneTextAlign = "left" | "center" | "right";
export type SceneScreenshotFit = "cover" | "contain";
/** How a background image fills the canvas. Superset of {@link SceneScreenshotFit}. */
export type SceneBackgroundFit = "cover" | "contain" | "stretch";
export type SceneDeviceFrame =
	| "iphone"
	| "android"
	| "ipad"
	| "android-tablet"
	| "apple-watch"
	| "laptop"
	| "none";
/** Device frame body color. Defaults per platform (iPhone→silver, Android→black). */
export type SceneDeviceColor = "black" | "silver";
/**
 * Device rendering style: "realistic" draws metallic rails and platform
 * details; "clay" draws a flat matte body in an arbitrary color (clayColor);
 * "photo" composites the screenshot into a photographic Apple product bezel
 * (see `bezelId`).
 */
export type SceneDeviceStyle = "realistic" | "clay" | "photo";

/** Gradient shape: linear (legacy default), radial or a soft multi-blob mesh. */
export type SceneGradientType = "linear" | "radial" | "mesh";

export type SceneBackgroundPatternType =
	| "dots"
	| "grid"
	| "diagonal"
	| "waves"
	| "rings"
	| "noise";

/** Decorative procedural pattern drawn over the base background fill. */
export interface SceneBackgroundPattern {
	type: SceneBackgroundPatternType;
	color: string;
	/** 0..1 overlay opacity. */
	opacity: number;
	/** Pattern density multiplier (~0.5 fine .. 3 chunky). */
	scale: number;
}

export interface SceneBackground {
	type: SceneBackgroundType;
	value: string;
	gradient?: { from: string; to: string; angle: number };
	/** Gradient shape (gradient type only). Defaults to "linear". */
	gradientType?: SceneGradientType;
	/** Optional middle gradient stop (linear/radial only). */
	via?: string;
	/** Blob colors for the "mesh" gradient (2–5 colors over `gradient.from`). */
	mesh?: string[];
	/** Optional procedural pattern overlay drawn over any background type. */
	pattern?: SceneBackgroundPattern;
	/** Image fill mode (image type only). Defaults to "cover". */
	fit?: SceneBackgroundFit;
	/**
	 * Focal offsets (-1..1, default 0) used in "cover" mode to pick which part
	 * of the image survives the crop (poor-man's crop panning).
	 */
	offsetX?: number;
	offsetY?: number;
}

export interface SceneDevice {
	frame: SceneDeviceFrame;
	scale: number;
	offsetX: number;
	offsetY: number;
	rotation?: number;
	/** Frame body color. Defaults to silver for iPhone, black for Android. */
	color?: SceneDeviceColor;
	/**
	 * 3D tilt in degrees around the horizontal (X) and vertical (Y) axes.
	 * Rendered as a perspective warp of the flat device render; 0/undefined
	 * keeps the legacy flat look, so old scenes render unchanged.
	 */
	rotationX?: number;
	rotationY?: number;
	/** Rendering style. Defaults to "realistic" (legacy scenes). */
	style?: SceneDeviceStyle;
	/** Flat body color used when style is "clay". */
	clayColor?: string;
	/** Photographic bezel id from the DEVICE_BEZELS catalog ("photo" style). */
	bezelId?: string;
	/** Soft elliptical shadow on the "floor" under the device. */
	groundShadow?: boolean;
	/** Diagonal glass reflection over the screen. */
	glare?: boolean;
}

export interface SceneScreenshot {
	assetId?: string;
	url?: string;
	fit?: SceneScreenshotFit;
}

export interface SceneTextLayer {
	id: string;
	text: string;
	x: number;
	y: number;
	fontFamily: string;
	fontSize: number;
	color: string;
	align: SceneTextAlign;
	weight?: number;
	/** Optional background color drawn as a rounded panel behind the text. */
	bg?: string;
	/** Optional text outline (both must be set for the stroke to draw). */
	strokeColor?: string;
	strokeWidth?: number;
	/**
	 * Optional drop shadow. Offsets are scene-space pixels (positive Y = shadow
	 * below the text). The shadow draws when a color is set.
	 */
	shadowColor?: string;
	shadowOffsetX?: number;
	shadowOffsetY?: number;
	shadowBlur?: number;
	/**
	 * When true, this layer's text is kept verbatim across language variants
	 * (e.g. brand names, prices). Persisted inside the opaque `jsonb` scene, so
	 * no backend migration is needed.
	 */
	doNotTranslate?: boolean;
	/** Gradient text fill (overrides `color` when set). Drawn top→bottom. */
	gradient?: { from: string; to: string };
	/** Marker-style highlight bar drawn behind each text line. */
	highlight?: string;
	/** Extra spacing between glyphs in px (canvas letterSpacing). */
	letterSpacing?: number;
	/** Line height as a multiple of fontSize. Defaults to 1.2. */
	lineHeight?: number;
	/**
	 * Arc curvature in degrees (-180..180). The text bends along a circle
	 * spanning this many degrees: positive arches upward, negative downward,
	 * 0/undefined renders straight (legacy).
	 */
	curve?: number;
}

export type SceneAnnotationType = "callout" | "badge" | "label";

/**
 * Properties shared by every annotation variant. Positions (`x`/`y`) are
 * normalized (0..1) fractions of the scene, mirroring {@link SceneTextLayer},
 * so annotations survive a change of target dimensions. Color/font props are
 * named consistently with text layers (`color` = text color, `fontSize`,
 * `weight`) for a uniform properties panel.
 */
interface SceneAnnotationBase {
	id: string;
	text: string;
	/** Normalized (0..1) anchor position of the annotation box. */
	x: number;
	y: number;
	fontSize: number;
	/** Text color. */
	color: string;
	/** Background fill color of the pill/bubble/label. */
	bg: string;
	weight?: number;
	fontFamily?: string;
	/**
	 * When true, the text is kept verbatim across language variants (e.g. a "NEW"
	 * badge or a brand name). Persisted in the opaque `jsonb` scene — no backend
	 * migration needed. Mirrors {@link SceneTextLayer.doNotTranslate}.
	 */
	doNotTranslate?: boolean;
}

/** A text bubble with a pointer/tail aimed at a target point on the scene. */
export interface SceneCalloutAnnotation extends SceneAnnotationBase {
	type: "callout";
	/** Normalized (0..1) point the tail points toward. */
	targetX: number;
	targetY: number;
}

/** A pill-shaped badge with text. */
export interface SceneBadgeAnnotation extends SceneAnnotationBase {
	type: "badge";
}

/** A simple text label with an optional background. */
export interface SceneLabelAnnotation extends SceneAnnotationBase {
	type: "label";
	/** When false, the label is drawn without a background fill. */
	showBackground?: boolean;
}

/**
 * A user-uploaded image layer (logo, sticker, arrow…). Unlike text annotations
 * it has no text/font props; `width` is a normalized (0..1) fraction of the
 * scene width and the height follows the image's natural aspect ratio.
 */
export interface SceneImageAnnotation {
	type: "image";
	id: string;
	/** Normalized (0..1) center position of the image box. */
	x: number;
	y: number;
	/** Normalized (0..1) width as a fraction of scene width. */
	width: number;
	/** Image source: dataURL (uploaded) or remote URL. */
	url: string;
	/** 0..1 opacity, default 1. */
	opacity?: number;
	/** Rotation in degrees, default 0. */
	rotation?: number;
	/**
	 * Natural aspect ratio (height / width), captured at upload time so the
	 * hit-test box matches the rendered box before the image is decoded.
	 */
	aspect?: number;
}

/** Hand-drawn decorative shape variants. */
export type SceneShapeKind =
	| "arrow"
	| "underline"
	| "squiggle"
	| "circle"
	| "sparkle"
	| "star"
	| "rating"
	| "heart"
	| "check"
	| "blob";

/**
 * A decorative vector shape (hand-drawn arrow, marker underline, squiggle,
 * circled emphasis, sparkles…) rendered procedurally — no image asset needed.
 * Positions/width are normalized (0..1) like other annotations.
 */
export interface SceneShapeAnnotation {
	type: "shape";
	id: string;
	shape: SceneShapeKind;
	/** Normalized (0..1) center position. */
	x: number;
	y: number;
	/** Normalized (0..1) width as a fraction of scene width. */
	width: number;
	color: string;
	/** Stroke thickness in scene px (stroked shapes only). */
	strokeWidth?: number;
	/** Rotation in degrees, default 0. */
	rotation?: number;
	/** 0..1 opacity, default 1. */
	opacity?: number;
	/** Mirror horizontally (e.g. flip an arrow's direction). */
	flip?: boolean;
}

/** Text-bearing annotation variants (everything except image layers). */
export type SceneTextAnnotation =
	| SceneCalloutAnnotation
	| SceneBadgeAnnotation
	| SceneLabelAnnotation;

export type SceneAnnotation =
	| SceneTextAnnotation
	| SceneImageAnnotation
	| SceneShapeAnnotation;

/** A custom font uploaded by the user, embedded in the scene as a dataURL. */
export interface SceneCustomFont {
	family: string;
	dataUrl: string;
}

export interface SceneData {
	width: number;
	height: number;
	background: SceneBackground;
	device?: SceneDevice;
	screenshot?: SceneScreenshot;
	textLayers: SceneTextLayer[];
	annotations?: SceneAnnotation[];
	/** User-uploaded fonts referenced by text layers/annotations. */
	customFonts?: SceneCustomFont[];
	/**
	 * Google Fonts families referenced by text layers/annotations, loaded
	 * dynamically from fonts.googleapis.com. Persisted in the opaque `jsonb`
	 * scene — no backend migration needed.
	 */
	googleFonts?: string[];
	/**
	 * Panorama panel count (default 1). When > 1 the scene is one wide canvas
	 * spanning N store screenshots (`width` = target width × panels); export
	 * splits it back into N images. Persisted in the opaque `jsonb` scene.
	 */
	panels?: number;
}
