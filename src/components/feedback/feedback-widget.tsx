"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { ChatIcon, CloseIcon } from "@/components/ui";
import { localeFromPath, type Locale } from "@/lib/i18n/locales";
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

const FEATURE_LABELS: Record<Locale, Record<string, string>> = {
  de: {
    "AI assistant": "KI-Assistent",
    Listings: "Store-Einträge",
    Other: "Sonstiges",
    Publishing: "Veröffentlichung",
    "Research & rank tracking": "Research und Rankings",
    Reviews: "Bewertungen",
    Screenshots: "Screenshots",
    "Self-hosting": "Self-Hosting",
    "Store connections": "Store-Verbindungen",
  },
  en: {},
  es: {
    "AI assistant": "Asistente de IA",
    Listings: "Fichas",
    Other: "Otro",
    Publishing: "Publicación",
    "Research & rank tracking": "Research y posiciones",
    Reviews: "Reseñas",
    Screenshots: "Capturas",
    "Self-hosting": "Self-hosting",
    "Store connections": "Conexiones con las tiendas",
  },
  pl: {
    "AI assistant": "Asystent AI",
    Listings: "Listingi",
    Other: "Inne",
    Publishing: "Publikacja",
    "Research & rank tracking": "Research i pozycje",
    Reviews: "Opinie",
    Screenshots: "Zrzuty ekranu",
    "Self-hosting": "Self-hosting",
    "Store connections": "Połączenia ze sklepami",
  },
};

interface FeedbackCopy {
  attachments: string;
  close: string;
  emailLabel: string;
  featureLabel: string;
  filesSelected: (count: number) => string;
  genericError: string;
  intro: string;
  messageLabel: string;
  messagePlaceholder: string;
  otherLabel: string;
  otherPlaceholder: string;
  sendError: string;
  sending: string;
  submit: string;
  thanksBody: string;
  thanksTitle: string;
  title: string;
}

const COPY: Record<Locale, FeedbackCopy> = {
  de: {
    attachments: "Anhänge (optional)",
    close: "Schließen",
    emailLabel: "Deine E-Mail",
    featureLabel: "Worum geht es?",
    filesSelected: (count) => `Ausgewählte Dateien: ${count}`,
    genericError: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
    intro: "Fehler, Ideen, alles. Wir lesen jede Nachricht.",
    messageLabel: "Nachricht",
    messagePlaceholder: "Schreib uns, was dir durch den Kopf geht...",
    otherLabel: "Bitte genauer",
    otherPlaceholder: "Welcher Bereich?",
    sendError: "Nachricht konnte nicht gesendet werden.",
    sending: "Wird gesendet...",
    submit: "Absenden",
    thanksBody: "Deine Nachricht ist bei uns angekommen. Wir lesen jede einzelne.",
    thanksTitle: "Danke!",
    title: "Schreib uns",
  },
  es: {
    attachments: "Adjuntos (opcional)",
    close: "Cerrar",
    emailLabel: "Tu correo",
    featureLabel: "¿Sobre qué es?",
    filesSelected: (count) => `Archivos seleccionados: ${count}`,
    genericError: "Algo ha salido mal. Inténtalo de nuevo.",
    intro: "Errores, ideas, lo que sea. Nos gusta leerlo.",
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuéntanos qué tienes en mente...",
    otherLabel: "Especifica",
    otherPlaceholder: "¿Qué área?",
    sendError: "No se ha podido enviar el mensaje.",
    sending: "Enviando...",
    submit: "Enviar",
    thanksBody: "Tu mensaje ha llegado a nuestra bandeja. Los leemos todos.",
    thanksTitle: "¡Gracias!",
    title: "Escríbenos",
  },
  en: {
    attachments: "Attachments (optional)",
    close: "Close",
    emailLabel: "Your email",
    featureLabel: "What's it about?",
    filesSelected: (count) => `${count} file${count > 1 ? "s" : ""} selected`,
    genericError: "Something went wrong. Please try again.",
    intro: "Bugs, ideas, anything - we'd love to hear it.",
    messageLabel: "Message",
    messagePlaceholder: "Tell us what's on your mind...",
    otherLabel: "Please specify",
    otherPlaceholder: "Which area?",
    sendError: "Failed to send feedback.",
    sending: "Sending...",
    submit: "Send feedback",
    thanksBody: "Your feedback landed in our inbox. We read every message.",
    thanksTitle: "Thank you! 🙌",
    title: "Leave your feedback",
  },
  pl: {
    attachments: "Załączniki (opcjonalnie)",
    close: "Zamknij",
    emailLabel: "Twój e-mail",
    featureLabel: "Czego dotyczy?",
    filesSelected: (count) => `Wybrane pliki: ${count}`,
    genericError: "Coś poszło nie tak. Spróbuj ponownie.",
    intro: "Błędy, pomysły, cokolwiek. Chętnie to przeczytamy.",
    messageLabel: "Wiadomość",
    messagePlaceholder: "Napisz, co Ci chodzi po głowie...",
    otherLabel: "Doprecyzuj",
    otherPlaceholder: "Jaki obszar?",
    sendError: "Nie udało się wysłać wiadomości.",
    sending: "Wysyłanie...",
    submit: "Wyślij",
    thanksBody:
      "Twoja wiadomość trafiła do naszej skrzynki. Czytamy każdą z nich.",
    thanksTitle: "Dziękujemy!",
    title: "Napisz do nas",
  },
};

const INPUT_CLASS =
  "w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent";

type Status = "idle" | "sending" | "sent" | "error";

export function FeedbackWidget(): React.JSX.Element {
  const locale = localeFromPath(usePathname());
  const copy = COPY[locale];
  const featureLabels = FEATURE_LABELS[locale];
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
          data.data?.info ?? copy.genericError,
        );
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : copy.sendError);
    }
  }

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-label={copy.title}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-medium text-white shadow-[0_8px_30px_-6px_rgba(91,94,232,0.6)] transition-all hover:bg-accent-bright active:scale-[0.97]"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? (
          <CloseIcon className="size-5" />
        ) : (
          <>
            <ChatIcon className="size-5" />
            <span className="hidden sm:inline">{copy.title}</span>
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
            <p className="text-lg font-semibold text-foreground">
              {copy.thanksTitle}
            </p>
            <p className="mt-2 text-sm text-muted">
              {copy.thanksBody}
            </p>
            <button
              type="button"
              className="mt-5 rounded-full border border-line px-4 py-2 text-sm text-foreground hover:border-accent/60"
              onClick={() => {
                reset();
                setOpen(false);
              }}
            >
              {copy.close}
            </button>
          </div>
        ) : (
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <h2 className="text-base font-semibold text-foreground">
                {copy.title}
              </h2>
              <p className="mt-1 text-xs text-muted">
                {copy.intro}
              </p>
            </div>

            <div>
              <label
                className="mb-1 block text-xs text-muted"
                htmlFor="fb-email"
              >
                {copy.emailLabel}
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
                {copy.featureLabel}
              </label>
              <select
                className={INPUT_CLASS}
                id="fb-feature"
                onChange={(e) => setFeature(e.target.value)}
                value={feature}
              >
                {FEATURES.map((f) => (
                  <option key={f} value={f}>
                    {featureLabels[f] ?? f}
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
                  {copy.otherLabel}
                </label>
                <input
                  className={INPUT_CLASS}
                  id="fb-other"
                  maxLength={200}
                  onChange={(e) => setOtherText(e.target.value)}
                  placeholder={copy.otherPlaceholder}
                  value={otherText}
                />
              </div>
            )}

            <div>
              <label
                className="mb-1 block text-xs text-muted"
                htmlFor="fb-message"
              >
                {copy.messageLabel}
              </label>
              <textarea
                className={cn(INPUT_CLASS, "min-h-24 resize-y")}
                id="fb-message"
                maxLength={5000}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={copy.messagePlaceholder}
                required
                value={message}
              />
            </div>

            <div>
              <label
                className="mb-1 block text-xs text-muted"
                htmlFor="fb-files"
              >
                {copy.attachments}
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
                  {copy.filesSelected(files.length)}
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
              {status === "sending" ? copy.sending : copy.submit}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
