"use client";

import { useState, useEffect, useRef } from "react";
import type { Dictionary } from "../i18n/en";

const STORAGE_KEY = "argan_bulk_popup_dismissed_v1";

interface BulkPopupProps {
  popupCopy: Dictionary["home"]["popup"];
}

export default function BulkPopup({ popupCopy }: BulkPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if the user has already seen or closed the popup in this session or previously
    try {
      const alreadySeen =
        sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY);
      if (alreadySeen) {
        return;
      }
    } catch {
      // Storage access might be restricted; continue gracefully
    }

    // Show only after 5 seconds of the very first visit
    timerRef.current = setTimeout(() => {
      setIsVisible(true);
      // Mark as seen immediately so navigating to another page will NOT trigger it again
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {
        // ignore
      }
    }, 5000);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="bulk-popup is-visible"
      id="bulkPopup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bulkPopupTitle"
      style={{ display: "flex" }}
    >
      <div
        className="bulk-popup__overlay"
        id="bulkPopupOverlay"
        onClick={closePopup}
      ></div>
      <div className="bulk-popup__card" role="document">
        <button
          className="bulk-popup__close"
          id="bulkPopupClose"
          aria-label={popupCopy.close}
          onClick={closePopup}
          type="button"
        >
          &times;
        </button>
        <span className="bulk-popup__eyebrow">{popupCopy.eyebrow}</span>
        <strong id="bulkPopupTitle" className="bulk-popup__title">
          {popupCopy.title}
        </strong>
        <p className="bulk-popup__lede">{popupCopy.lede}</p>
        <div className="bulk-popup__media">
          <img src="/image/argan oil bulk.jpg" alt={popupCopy.title} />
        </div>
        <p className="bulk-popup__body">{popupCopy.body}</p>
        <a
          href="https://wa.me/212604033783?text=Hello%20Wholesale%20Argan%20Oil%2C%20I%20am%20interested%20in%20bulk%20purchasing."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary bulk-popup__cta"
          onClick={closePopup}
        >
          {popupCopy.cta} <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}

