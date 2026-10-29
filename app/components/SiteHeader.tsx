"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_NAMES,
  isHomePath,
  localeFromPathname,
  localePath,
  stripLocalePrefix,
  type Locale,
} from "../i18n/config";
import { en } from "../i18n/en";
import type { Dictionary } from "../i18n/en";
import FlagIcon from "./FlagIcon";

const NAV_ITEMS = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "products", path: "/products" },
  { key: "privateLabel", path: "/private-label" },
  { key: "blog", path: "/blog" },
  { key: "benefits", path: "/benefits" },
  { key: "faq", path: "/faq" },
  { key: "contact", path: "/contact" },
] as const;

interface SiteHeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
  locale?: Locale;
  nav?: Dictionary["nav"];
}

export default function SiteHeader({
  isMenuOpen,
  setIsMenuOpen,
  isScrolled,
  locale,
  nav,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const resolvedLocale = locale ?? localeFromPathname(pathname);
  const labels = nav ?? en.nav;
  const isHome = isHomePath(pathname);
  const homeHref = localePath(resolvedLocale);
  const logoHref = isHome ? "#top" : homeHref;
  const ctaHref = isHome ? "#contact" : localePath(resolvedLocale, "/contact");
  const cleanPath = stripLocalePrefix(pathname);

  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLangOpen(false);
      }
    };

    if (isLangOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLangOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navHref = (path: string) => {
    if (path === "/") return homeHref;
    return localePath(resolvedLocale, path);
  };

  return (
    <header className={`nav ${isScrolled ? "is-scrolled" : ""}`} id="top">
      <div className="container nav__wrap">
        <a className="brand" href={logoHref}>
          <img src="/assets/img/logo.png" alt={labels.logoAlt} />
        </a>
        <nav className={`nav__links ${isMenuOpen ? "is-open" : ""}`} id="navLinks">
          {NAV_ITEMS.map(({ key, path }) => (
            <a key={key} href={navHref(path)} onClick={closeMenu}>
              {labels[key]}
            </a>
          ))}
        </nav>

        {/* Dropdown Language Switcher */}
        <div className="lang-dropdown" ref={langDropdownRef}>
          <button
            type="button"
            className={`lang-dropdown__btn ${isLangOpen ? "is-open" : ""}`}
            onClick={() => setIsLangOpen((prev) => !prev)}
            aria-expanded={isLangOpen}
            aria-haspopup="true"
            aria-label="Select language"
          >
            <FlagIcon locale={resolvedLocale} className="lang-dropdown__btn-flag" />
            <span className="lang-dropdown__current">{LOCALE_LABELS[resolvedLocale]}</span>
            <i
              className={`fas fa-chevron-down lang-dropdown__arrow ${isLangOpen ? "is-open" : ""}`}
              aria-hidden="true"
            ></i>
          </button>

          {isLangOpen && (
            <div className="lang-dropdown__menu" role="menu" aria-label="Languages">
              {LOCALES.map((code) => {
                const isActive = code === resolvedLocale;
                return (
                  <a
                    key={code}
                    href={localePath(code, cleanPath)}
                    hrefLang={code}
                    lang={code}
                    className={`lang-dropdown__item ${isActive ? "is-active" : ""}`}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsLangOpen(false)}
                  >
                    <span className="lang-dropdown__item-left">
                      <FlagIcon locale={code} className="lang-dropdown__flag" />
                      <span className="lang-dropdown__name">{LOCALE_NAMES[code]}</span>
                      <span className="lang-dropdown__badge">{LOCALE_LABELS[code]}</span>
                    </span>
                    {isActive && (
                      <i className="fas fa-check lang-dropdown__check" aria-hidden="true"></i>
                    )}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <button
          className="nav__menu-btn"
          id="menuBtn"
          aria-label={labels.menu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
        <a className="btn btn--pill" href={ctaHref}>
          {labels.cta}
        </a>
      </div>
    </header>
  );
}
