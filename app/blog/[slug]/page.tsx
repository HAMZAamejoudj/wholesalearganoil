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
import {
  BLOG_POSTS,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/app/lib/blog-posts";
import { SITE_URL } from "@/app/lib/site";
import { en } from "@/app/i18n/en";
import { blogPostMetadata } from "@/app/i18n/seo";
import BlogPostClient from "./BlogPostClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article not found",
    };
  }

  return blogPostMetadata("en", post);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}`;
  const related = getRelatedBlogPosts(post.slug);

  const schema = buildSchemaGraph([
    webPageSchema({
      name: post.h1,
      description: post.metaDescription,
      path,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
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
        locale="en"
        dict={en}
      />
    </>
  );
}
