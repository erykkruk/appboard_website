import type { JSX, ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
}

export function Highlight({ children }: HighlightProps): JSX.Element {
  return (
    <em className="marker not-italic">
      <span>{children}</span>
    </em>
  );
}
