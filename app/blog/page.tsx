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
import { en } from "@/app/i18n/en";
import { blogMetadata } from "@/app/i18n/seo";

export const metadata: Metadata = blogMetadata("en", en);

const blogSchema = buildSchemaGraph([
  webPageSchema({
    name: "Argan Oil Wholesale Blog | Buy, Verify and Use Moroccan Oil",
    description:
      "Guides on buying authentic Moroccan argan oil wholesale, verifying purity, and using it for skin, hair, body and beard.",
    path: "/blog",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]),
  articleSchema({
    title: "Argan Oil Guides for Buyers and Brands",
    description:
      "Guides on buying authentic Moroccan argan oil, verifying purity, and using it for skin, hair, body and beard.",
    path: "/blog",
    image: `${SITE_URL}/assets/img/argan-oil-from-morocco.jpg`,
  }),
]);

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <BlogClient locale="en" dict={en} />
    </>
  );
}
