import type { JSX, ReactNode } from "react";

interface IconProps {
  className?: string;
}

interface IconBaseProps extends IconProps {
  children: ReactNode;
}

function IconBase({ children, className }: IconBaseProps): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

export function PlugIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <path d="M9 3v5m6-5v5M7 8h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V8Z" />
      <path d="M12 16v5" />
    </IconBase>
  );
}

export function BranchIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <circle cx="6" cy="5" r="2.2" />
      <circle cx="6" cy="19" r="2.2" />
      <circle cx="18" cy="9" r="2.2" />
      <path d="M6 7.2v9.6M18 11.2a6 6 0 0 1-6 6h-3" />
    </IconBase>
  );
}

export function SparklesIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <path d="M12 4l1.7 4.3L18 10l-4.3 1.7L12 16l-1.7-4.3L6 10l4.3-1.7L12 4Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      <path d="M5 16l.6 1.4L7 18l-1.4.6L5 20l-.6-1.4L3 18l1.4-.6L5 16Z" />
    </IconBase>
  );
}

export function ImageIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <rect height="16" rx="2.5" width="18" x="3" y="4" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="M3.5 17.5 9 13l4 3.5 3.5-3 4 4" />
    </IconBase>
  );
}

export function ChartIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <path d="M4 4v15a1 1 0 0 0 1 1h15" />
      <path d="M8 15v-3m4.5 3V8m4.5 7v-5" />
    </IconBase>
  );
}

export function ChatIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12Z" />
      <path d="M8.5 11h7m-7 3.5h4" />
    </IconBase>
  );
}

export function RocketIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <path d="M12 15c-1.5-1-2.5-2.5-2.5-5C9.5 6 11 3.5 12 2.5 13 3.5 14.5 6 14.5 10c0 2.5-1 4-2.5 5Z" />
      <path d="M9.5 12.5 6 14l1.5 3M14.5 12.5 18 14l-1.5 3M12 15v4.5" />
    </IconBase>
  );
}

export function ShieldIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <path d="M12 3 5 6v5c0 4.4 2.9 8.1 7 10 4.1-1.9 7-5.6 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4.5" />
    </IconBase>
  );
}

export function LockIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <rect height="9" rx="2" width="14" x="5" y="11" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      <path d="M12 14.5v2.5" />
    </IconBase>
  );
}

export function CheckIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </IconBase>
  );
}

export function ArrowRightIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </IconBase>
  );
}

export function MenuIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </IconBase>
  );
}

export function CloseIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <path d="m6 6 12 12M18 6 6 18" />
    </IconBase>
  );
}
