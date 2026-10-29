import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";
import BlogClient from "@/app/blog/BlogClient";
import {
  articleSchema,
  breadcrumbSchema,
  buildSchemaGraph,
  webPageSchema,
} from "@/app/lib/schema";
import { SITE_URL } from "@/app/lib/site";
import { NON_DEFAULT_LOCALES, resolveLocale, localePath } from "@/app/i18n/config";
import { getDictionary } from "@/app/i18n/get-dictionary";
import { blogMetadata } from "@/app/i18n/seo";
import { getLocalizedBlogPostsByCategory } from "@/app/lib/blog-posts-i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const dict = getDictionary(locale);
  return blogMetadata(locale, dict);
}

export default async function LocalizedBlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const dict = getDictionary(locale);

  const path = localePath(locale, "/blog");
  const buyCards = getLocalizedBlogPostsByCategory("buy", locale);
  const usageCards = getLocalizedBlogPostsByCategory("use", locale);

  const blogSchema = buildSchemaGraph([
    webPageSchema({
      name: dict.meta.blog.title,
      description: dict.meta.blog.description,
      path,
    }),
    breadcrumbSchema([
      { name: dict.nav.home, path: localePath(locale, "/") },
      { name: dict.nav.blog, path },
    ]),
    articleSchema({
      title: dict.blog.heroTitle,
      description: dict.meta.blog.description,
      path,
      image: `${SITE_URL}/assets/img/argan-oil-from-morocco.jpg`,
    }),
  ]);

  return (
    <>
      <JsonLd data={blogSchema} />
      <BlogClient
        locale={locale}
        dict={dict}
        buyCards={buyCards}
        usageCards={usageCards}
      />
    </>
  );
}
