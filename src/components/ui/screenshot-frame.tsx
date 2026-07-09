import Image from "next/image";

import { cn } from "@/lib/utils";

import type { JSX } from "react";

interface ScreenshotFrameProps {
  alt: string;
  className?: string;
  priority?: boolean;
  src: string;
}

export function ScreenshotFrame({
  alt,
  className,
  priority = false,
  src,
}: ScreenshotFrameProps): JSX.Element {
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
          app.appboard.dev
        </span>
      </div>
      <Image
        alt={alt}
        className="w-full"
        height={1000}
        priority={priority}
        sizes="(min-width: 1024px) 60vw, 100vw"
        src={src}
        width={1600}
      />
    </figure>
  );
}
