import { notFound } from "next/navigation";
import AboutClient from "../../about/AboutClient";
import JsonLd from "../../components/JsonLd";
import { isPrefixLocale, localePath, SCHEMA_LANG } from "../../i18n/config";
import { getDictionary } from "../../i18n/get-dictionary";
import { aboutMetadata } from "../../i18n/seo";
import { breadcrumbSchema, buildSchemaGraph, webPageSchema } from "../../lib/schema";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "es" }, { lang: "ar" }];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isPrefixLocale(lang)) notFound();
  return aboutMetadata(lang, getDictionary(lang));
}

export default async function LocalizedAboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isPrefixLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const path = localePath(lang, "/about");

  const schema = buildSchemaGraph([
    webPageSchema({
      name: dict.meta.about.title,
      description: dict.meta.about.ogDescription,
      path,
      inLanguage: SCHEMA_LANG[lang],
    }),
    breadcrumbSchema([
      { name: dict.nav.home, path: localePath(lang, "/") },
      { name: dict.nav.about, path },
    ]),
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <AboutClient locale={lang} dict={dict} />
    </>
  );
}

