import { notFound } from "next/navigation";
import BenefitsClient from "../../benefits/BenefitsClient";
import JsonLd from "../../components/JsonLd";
import { isPrefixLocale, localePath, SCHEMA_LANG } from "../../i18n/config";
import { getDictionary } from "../../i18n/get-dictionary";
import { benefitsMetadata } from "../../i18n/seo";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  webPageSchema,
} from "../../lib/schema";

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
  return benefitsMetadata(lang, getDictionary(lang));
}

export default async function LocalizedBenefitsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isPrefixLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const path = localePath(lang, "/benefits");

  const schema = buildSchemaGraph([
    webPageSchema({
      name: dict.meta.benefits.title,
      description: dict.meta.benefits.ogDescription,
      path,
      inLanguage: SCHEMA_LANG[lang],
    }),
    breadcrumbSchema([
      { name: dict.nav.home, path: localePath(lang, "/") },
      { name: dict.nav.benefits, path },
    ]),
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <BenefitsClient locale={lang} dict={dict} />
    </>
  );
}

