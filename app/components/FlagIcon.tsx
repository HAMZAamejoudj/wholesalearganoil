import React from "react";
import type { Locale } from "../i18n/config";

interface FlagIconProps {
  locale: Locale;
  className?: string;
  width?: number;
  height?: number;
}

export default function FlagIcon({
  locale,
  className = "lang-flag",
  width = 22,
  height = 15,
}: FlagIconProps) {
  switch (locale) {
    case "fr":
      // France flag: Blue, White, Red vertical tricolor
      return (
        <svg
          viewBox="0 0 36 24"
          width={width}
          height={height}
          className={className}
          aria-hidden="true"
        >
          <rect width="12" height="24" fill="#002654" />
          <rect x="12" width="12" height="24" fill="#ffffff" />
          <rect x="24" width="12" height="24" fill="#ed2939" />
        </svg>
      );

    case "es":
      // Spain flag: Red, Yellow, Red horizontal tricolor with simplified royal emblem
      return (
        <svg
          viewBox="0 0 36 24"
          width={width}
          height={height}
          className={className}
          aria-hidden="true"
        >
          <rect width="36" height="6" fill="#aa151b" />
          <rect y="6" width="36" height="12" fill="#f1bf00" />
          <rect y="18" width="36" height="6" fill="#aa151b" />
          {/* Simplified Spanish coat of arms */}
          <g transform="translate(10, 8.5)">
            <rect x="0" y="0" width="3" height="1" rx="0.3" fill="#aa151b" />
            <path
              d="M0 1.2h3v3.5a1.5 1.5 0 0 1-3 0V1.2z"
              fill="#c60b1e"
              stroke="#8a0000"
              strokeWidth="0.4"
            />
            <circle cx="1.5" cy="2.8" r="0.7" fill="#f1bf00" />
          </g>
        </svg>
      );

    case "ar":
      // Morocco flag: Red field with interlaced green 5-pointed star
      return (
        <svg
          viewBox="0 0 36 24"
          width={width}
          height={height}
          className={className}
          aria-hidden="true"
        >
          <rect width="36" height="24" fill="#c1272d" />
          <polygon
            points="18.00,5.00 22.11,17.66 11.34,9.84 24.66,9.84 13.89,17.66"
            fill="none"
            stroke="#006233"
            strokeWidth="1.5"
            strokeLinejoin="miter"
          />
        </svg>
      );

    case "en":
    default:
      // USA flag: 13 stripes with blue canton and 50 star points
      return (
        <svg
          viewBox="0 0 36 24"
          width={width}
          height={height}
          className={className}
          aria-hidden="true"
        >
          <rect width="36" height="24" fill="#b22234" />
          <rect y="1.85" width="36" height="1.85" fill="#ffffff" />
          <rect y="5.54" width="36" height="1.85" fill="#ffffff" />
          <rect y="9.23" width="36" height="1.85" fill="#ffffff" />
          <rect y="12.92" width="36" height="1.85" fill="#ffffff" />
          <rect y="16.62" width="36" height="1.85" fill="#ffffff" />
          <rect y="20.31" width="36" height="1.85" fill="#ffffff" />
          <rect width="14.4" height="12.92" fill="#3c3b6e" />
          <g fill="#ffffff">
            <circle cx="2.4" cy="2.2" r="0.65" />
            <circle cx="4.8" cy="2.2" r="0.65" />
            <circle cx="7.2" cy="2.2" r="0.65" />
            <circle cx="9.6" cy="2.2" r="0.65" />
            <circle cx="12.0" cy="2.2" r="0.65" />

            <circle cx="3.6" cy="4.3" r="0.65" />
            <circle cx="6.0" cy="4.3" r="0.65" />
            <circle cx="8.4" cy="4.3" r="0.65" />
            <circle cx="10.8" cy="4.3" r="0.65" />

            <circle cx="2.4" cy="6.4" r="0.65" />
            <circle cx="4.8" cy="6.4" r="0.65" />
            <circle cx="7.2" cy="6.4" r="0.65" />
            <circle cx="9.6" cy="6.4" r="0.65" />
            <circle cx="12.0" cy="6.4" r="0.65" />

            <circle cx="3.6" cy="8.5" r="0.65" />
            <circle cx="6.0" cy="8.5" r="0.65" />
            <circle cx="8.4" cy="8.5" r="0.65" />
            <circle cx="10.8" cy="8.5" r="0.65" />

            <circle cx="2.4" cy="10.6" r="0.65" />
            <circle cx="4.8" cy="10.6" r="0.65" />
            <circle cx="7.2" cy="10.6" r="0.65" />
            <circle cx="9.6" cy="10.6" r="0.65" />
            <circle cx="12.0" cy="10.6" r="0.65" />
          </g>
        </svg>
      );
  }
}

