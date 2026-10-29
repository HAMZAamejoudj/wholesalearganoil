import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/app/components/JsonLd";
import {
  articleSchema,
  breadcrumbSchema,
  buildSchemaGraph,
  faqPageSchema,
  webPageSchema,
} from "@/app/lib/schema";
import { BLOG_POSTS } from "@/app/lib/blog-posts";
import {
  getLocalizedBlogPost,
  getLocalizedRelatedBlogPosts,
} from "@/app/lib/blog-posts-i18n";
import { SITE_URL } from "@/app/lib/site";
import { NON_DEFAULT_LOCALES, resolveLocale, localePath } from "@/app/i18n/config";
import { getDictionary } from "@/app/i18n/get-dictionary";
import { blogPostMetadata } from "@/app/i18n/seo";
import BlogPostClient from "@/app/blog/[slug]/BlogPostClient";

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of NON_DEFAULT_LOCALES) {
    for (const post of BLOG_POSTS) {
      params.push({ lang, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const post = getLocalizedBlogPost(slug, locale);

  if (!post) {
    return {
      title: "Article not found",
    };
  }

  return blogPostMetadata(locale, post);
}

export default async function LocalizedBlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const dict = getDictionary(locale);
  const post = getLocalizedBlogPost(slug, locale);

  if (!post) {
    notFound();
  }

  const path = localePath(locale, `/blog/${post.slug}`);
  const related = getLocalizedRelatedBlogPosts(post.slug, locale);

  const schema = buildSchemaGraph([
    webPageSchema({
      name: post.h1,
      description: post.metaDescription,
      path,
    }),
    breadcrumbSchema([
      { name: dict.nav.home, path: localePath(locale, "/") },
      { name: dict.nav.blog, path: localePath(locale, "/blog") },
      { name: post.cardTitle, path },
    ]),
    articleSchema({
      title: post.h1,
      description: post.metaDescription,
      path,
      image: `${SITE_URL}${post.image}`,
    }),
    faqPageSchema(post.faq, path),
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <BlogPostClient
        post={post}
        related={related}
        locale={locale}
        dict={dict}
      />
    </>
  );
}
