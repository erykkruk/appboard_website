"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

import type { JSX } from "react";

interface VideoDemoProps {
  caption?: string;
  className?: string;
  height: number;
  poster: string;
  src: string;
  title: string;
  width: number;
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void): () => void {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

/**
 * Plays only while on screen and only when the visitor has not asked for
 * reduced motion. `preload="none"` keeps the file off the critical path, so
 * the poster carries the layout until playback actually starts.
 */
export function VideoDemo({
  caption,
  className,
  height,
  poster,
  src,
  title,
  width,
}: VideoDemoProps): JSX.Element {
  const ref = useRef<HTMLVideoElement>(null);
  const [autoplayFailed, setAutoplayFailed] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const showControls = prefersReducedMotion || autoplayFailed;

  useEffect(() => {
    const video = ref.current;
    if (!video || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.play().catch(() => setAutoplayFailed(true));
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-accent/10",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 border-b border-line bg-panel/60 px-4 py-2.5"
      >
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="ml-3 flex h-5 w-44 items-center rounded-md bg-background/60 px-2 font-mono text-[10px] text-muted">
          app.appboard.dev/editor
        </span>
      </div>
      <video
        aria-label={title}
        className="block w-full"
        controls={showControls}
        height={height}
        loop
        muted
        playsInline
        poster={poster}
        preload="none"
        ref={ref}
        width={width}
      >
        <source src={src} type="video/mp4" />
      </video>
      {caption ? (
        <figcaption className="border-t border-line bg-panel/40 px-4 py-3 text-center text-xs text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
