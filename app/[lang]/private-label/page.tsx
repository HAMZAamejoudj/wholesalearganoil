import { notFound } from "next/navigation";
import PrivateLabelClient from "../../private-label/PrivateLabelClient";
import JsonLd from "../../components/JsonLd";
import { isPrefixLocale, localePath, SCHEMA_LANG } from "../../i18n/config";
import { getDictionary } from "../../i18n/get-dictionary";
import { privateLabelMetadata } from "../../i18n/seo";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  privateLabelServiceSchema,
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
  return privateLabelMetadata(lang, getDictionary(lang));
}

export default async function LocalizedPrivateLabelPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isPrefixLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const path = localePath(lang, "/private-label");

  const schema = buildSchemaGraph([
    webPageSchema({
      name: dict.meta.privateLabel.title,
      description: dict.meta.privateLabel.ogDescription,
      path,
      inLanguage: SCHEMA_LANG[lang],
    }),
    breadcrumbSchema([
      { name: dict.nav.home, path: localePath(lang, "/") },
      { name: dict.nav.privateLabel, path },
    ]),
    privateLabelServiceSchema(),
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <PrivateLabelClient locale={lang} dict={dict} />
    </>
  );
}

