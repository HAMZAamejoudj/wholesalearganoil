import type { Locale } from "./config";
import type { Dictionary } from "./en";
import { en } from "./en";
import { fr } from "./fr";
import { es } from "./es";
import { ar } from "./ar";

const dictionaries: Record<Locale, Dictionary> = { en, fr, es, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
