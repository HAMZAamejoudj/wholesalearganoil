import { notFound } from "next/navigation";
import ContactClient from "../../contact/ContactClient";
import JsonLd from "../../components/JsonLd";
import { isPrefixLocale, localePath, SCHEMA_LANG } from "../../i18n/config";
import { getDictionary } from "../../i18n/get-dictionary";
import { contactMetadata } from "../../i18n/seo";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  contactPageSchema,
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
  return contactMetadata(lang, getDictionary(lang));
}

export default async function LocalizedContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isPrefixLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const path = localePath(lang, "/contact");

  const schema = buildSchemaGraph([
    webPageSchema({
      name: dict.meta.contact.title,
      description: dict.meta.contact.ogDescription,
      path,
      inLanguage: SCHEMA_LANG[lang],
    }),
    breadcrumbSchema([
      { name: dict.nav.home, path: localePath(lang, "/") },
      { name: dict.nav.contact, path },
    ]),
    contactPageSchema(),
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <ContactClient locale={lang} dict={dict} />
    </>
  );
}

