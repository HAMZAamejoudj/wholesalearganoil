export const LOCALES = ["en", "fr", "es", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const PREFIX_LOCALES = ["fr", "es", "ar"] as const;
export type PrefixLocale = (typeof PREFIX_LOCALES)[number];
export const NON_DEFAULT_LOCALES = PREFIX_LOCALES;

export function resolveLocale(value: string): Locale {
  return isPrefixLocale(value) ? value : DEFAULT_LOCALE;
}

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  es: "ES",
  ar: "AR",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  ar: "العربية",
};

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  es: "es",
  ar: "ar",
};

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  es: "es_ES",
  ar: "ar_MA",
};

export const SCHEMA_LANG: Record<Locale, string> = {
  en: "en-US",
  fr: "fr-FR",
  es: "es-ES",
  ar: "ar-MA",
};

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function isPrefixLocale(value: string): value is PrefixLocale {
  return PREFIX_LOCALES.includes(value as PrefixLocale);
}

export function isRtl(locale: Locale): boolean {
  return locale === "ar";
}

export function localePath(locale: Locale, path = "/"): string {
  const normalized = path === "" ? "/" : path;
  if (locale === DEFAULT_LOCALE) {
    return normalized;
  }
  if (normalized === "/") {
    return `/${locale}/`;
  }
  return `/${locale}${normalized.startsWith("/") ? normalized : `/${normalized}`}`;
}

export function localeFromPathname(pathname: string): Locale {
  const match = pathname.match(/^\/(fr|es|ar)(?=\/|$)/);
  return match ? (match[1] as Locale) : DEFAULT_LOCALE;
}

export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/(fr|es|ar)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

export function isHomePath(pathname: string): boolean {
  return pathname === "/" || pathname === "/fr" || pathname === "/fr/" || pathname === "/es" || pathname === "/es/" || pathname === "/ar" || pathname === "/ar/";
}
