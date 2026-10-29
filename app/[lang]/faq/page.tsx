import { notFound } from "next/navigation";
import FaqClient from "../../faq/FaqClient";
import JsonLd from "../../components/JsonLd";
import { isPrefixLocale, localePath, SCHEMA_LANG } from "../../i18n/config";
import { getDictionary } from "../../i18n/get-dictionary";
import { faqMetadata } from "../../i18n/seo";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  faqPageSchema,
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
  return faqMetadata(lang, getDictionary(lang));
}

export default async function LocalizedFaqPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isPrefixLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const path = localePath(lang, "/faq");

  const localizedFaqEntities = dict.faq.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  const schema = buildSchemaGraph([
    webPageSchema({
      name: dict.meta.faq.title,
      description: dict.meta.faq.ogDescription,
      path,
      inLanguage: SCHEMA_LANG[lang],
    }),
    breadcrumbSchema([
      { name: dict.nav.home, path: localePath(lang, "/") },
      { name: dict.nav.faq, path },
    ]),
    faqPageSchema(localizedFaqEntities),
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <FaqClient locale={lang} dict={dict} />
    </>
  );
}

