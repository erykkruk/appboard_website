"use client";

import { useState } from "react";

import { ChatIcon, CloseIcon } from "@/components/ui";
import { API_URL } from "@/lib/seo";
import { cn } from "@/lib/utils";

const FEATURES = [
  "Listings",
  "Screenshots",
  "Publishing",
  "Research & rank tracking",
  "Reviews",
  "AI assistant",
  "Store connections",
  "Self-hosting",
  "Other",
] as const;

const INPUT_CLASS =
  "w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent";

type Status = "idle" | "sending" | "sent" | "error";

export function FeedbackWidget(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [feature, setFeature] = useState<string>(FEATURES[0]);
  const [otherText, setOtherText] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function reset() {
    setEmail("");
    setFeature(FEATURES[0]);
    setOtherText("");
    setMessage("");
    setFiles([]);
    setStatus("idle");
    setError("");
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const form = new FormData();
      form.append("email", email);
      form.append("feature", feature);
      if (feature === "Other" && otherText.trim()) {
        form.append("otherText", otherText.trim());
      }
      form.append("message", message);
      for (const file of files) form.append("files", file);

      const res = await fetch(`${API_URL}/api/feedback`, {
        body: form,
        method: "POST",
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          data?: { info?: string };
        };
        throw new Error(
          data.data?.info ?? "Something went wrong. Please try again.",
        );
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send feedback.");
    }
  }

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-label="Leave your feedback"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-medium text-white shadow-[0_8px_30px_-6px_rgba(91,94,232,0.6)] transition-all hover:bg-accent-bright active:scale-[0.97]"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? (
          <CloseIcon className="size-5" />
        ) : (
          <>
            <ChatIcon className="size-5" />
            <span className="hidden sm:inline">Leave your feedback</span>
          </>
        )}
      </button>

      <div
        className={cn(
          "fixed bottom-20 right-5 z-50 w-[min(92vw,380px)] rounded-2xl border border-line bg-panel p-5 shadow-2xl",
          !open && "hidden",
        )}
      >
        {status === "sent" ? (
          <div className="py-4 text-center">
            <p className="text-lg font-semibold text-foreground">Thank you! 🙌</p>
            <p className="mt-2 text-sm text-muted">
              Your feedback landed in our inbox. We read every message.
            </p>
            <button
              type="button"
              className="mt-5 rounded-full border border-line px-4 py-2 text-sm text-foreground hover:border-accent/60"
              onClick={() => {
                reset();
                setOpen(false);
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <h2 className="text-base font-semibold text-foreground">
                Leave your feedback
              </h2>
              <p className="mt-1 text-xs text-muted">
                Bugs, ideas, anything — we&apos;d love to hear it.
              </p>
            </div>

            <div>
              <label
                className="mb-1 block text-xs text-muted"
                htmlFor="fb-email"
              >
                Your email
              </label>
              <input
                className={INPUT_CLASS}
                id="fb-email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                type="email"
                value={email}
              />
            </div>

            <div>
              <label
                className="mb-1 block text-xs text-muted"
                htmlFor="fb-feature"
              >
                What&apos;s it about?
              </label>
              <select
                className={INPUT_CLASS}
                id="fb-feature"
                onChange={(e) => setFeature(e.target.value)}
                value={feature}
              >
                {FEATURES.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {feature === "Other" && (
              <div>
                <label
                  className="mb-1 block text-xs text-muted"
                  htmlFor="fb-other"
                >
                  Please specify
                </label>
                <input
                  className={INPUT_CLASS}
                  id="fb-other"
                  maxLength={200}
                  onChange={(e) => setOtherText(e.target.value)}
                  placeholder="Which area?"
                  value={otherText}
                />
              </div>
            )}

            <div>
              <label
                className="mb-1 block text-xs text-muted"
                htmlFor="fb-message"
              >
                Message
              </label>
              <textarea
                className={cn(INPUT_CLASS, "min-h-24 resize-y")}
                id="fb-message"
                maxLength={5000}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what's on your mind…"
                required
                value={message}
              />
            </div>

            <div>
              <label
                className="mb-1 block text-xs text-muted"
                htmlFor="fb-files"
              >
                Attachments (optional)
              </label>
              <input
                className="w-full text-xs text-muted file:mr-3 file:rounded-md file:border-0 file:bg-surface file:px-3 file:py-1.5 file:text-xs file:text-foreground hover:file:bg-panel"
                id="fb-files"
                multiple
                onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
                type="file"
              />
              {files.length > 0 && (
                <p className="mt-1 text-xs text-muted">
                  {files.length} file{files.length > 1 ? "s" : ""} selected
                </p>
              )}
            </div>

            {status === "error" && (
              <p className="text-xs text-red-400">{error}</p>
            )}

            <button
              className="w-full rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-bright disabled:opacity-60"
              disabled={status === "sending"}
              type="submit"
            >
              {status === "sending" ? "Sending…" : "Send feedback"}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
