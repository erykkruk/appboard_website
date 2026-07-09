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

// Brand glyph — filled (not IconBase, which is stroke-only).
export function DiscordIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03ZM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.42-2.157 2.42Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.42-2.157 2.42Z" />
    </svg>
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
