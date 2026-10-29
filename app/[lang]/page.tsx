import { notFound } from "next/navigation";
import HomeClient from "../HomeClient";
import { isPrefixLocale } from "../i18n/config";
import { getDictionary } from "../i18n/get-dictionary";
import { homeMetadata } from "../i18n/seo";

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
  return homeMetadata(lang, getDictionary(lang));
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isPrefixLocale(lang)) notFound();
  return <HomeClient locale={lang} dict={getDictionary(lang)} />;
}
