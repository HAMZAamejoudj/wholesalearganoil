"use client";

import { useState } from "react";
import type { Locale } from "../i18n/config";

interface ShareButtonsProps {
  title: string;
  url?: string;
  locale?: Locale;
}

const SHARE_LABELS: Record<Locale, { label: string; copied: string }> = {
  en: { label: "Share this guide:", copied: "Link copied!" },
  fr: { label: "Partager ce guide :", copied: "Lien copié !" },
  es: { label: "Compartir esta guía:", copied: "¡Enlace copiado!" },
  ar: { label: "مشاركة هذا الدليل:", copied: "تم نسخ الرابط!" },
};

export default function ShareButtons({
  title,
  url,
  locale = "en",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const labels = SHARE_LABELS[locale] ?? SHARE_LABELS.en;

  const currentUrl =
    url ||
    (typeof window !== "undefined"
      ? window.location.href
      : "https://www.wholesalearganoil.com");

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      });
    }
  };

  return (
    <div className="share-bar" aria-label="Social sharing options">
      <span className="share-bar__label">{labels.label}</span>
      <div className="share-bar__links">
        <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-bar__btn share-bar__btn--whatsapp"
          aria-label="Share on WhatsApp"
          title="Share on WhatsApp"
        >
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
          <span>WhatsApp</span>
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-bar__btn share-bar__btn--linkedin"
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          <span>LinkedIn</span>
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-bar__btn share-bar__btn--x"
          aria-label="Share on X (Twitter)"
          title="Share on X"
        >
          <i className="fab fa-x-twitter" aria-hidden="true"></i>
          <span>X</span>
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-bar__btn share-bar__btn--facebook"
          aria-label="Share on Facebook"
          title="Share on Facebook"
        >
          <i className="fab fa-facebook-f" aria-hidden="true"></i>
          <span>Facebook</span>
        </a>

        <button
          type="button"
          onClick={handleCopy}
          className={`share-bar__btn share-bar__btn--copy ${copied ? "is-copied" : ""}`}
          aria-label="Copy link"
          title="Copy page link"
        >
          <i
            className={`fas ${copied ? "fa-check" : "fa-link"}`}
            aria-hidden="true"
          ></i>
          <span>{copied ? labels.copied : "Copy"}</span>
        </button>
      </div>
    </div>
  );
}

