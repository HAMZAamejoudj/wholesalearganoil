import type { MetadataRoute } from "next";
import { LOCALES, localePath } from "./i18n/config";
import { hreflangLanguages, localeUrl } from "./i18n/seo";
import { BLOG_POSTS } from "./lib/blog-posts";
import { PRODUCTS } from "./lib/products";

export const dynamic = "force-static";

interface RouteConfig {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

const ALL_ROUTES: RouteConfig[] = [
  // 8 Main sections
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products", priority: 0.95, changeFrequency: "weekly" },
  { path: "/private-label", priority: 0.9, changeFrequency: "monthly" },
  { path: "/benefits", priority: 0.85, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.85, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" },

  // 5 Individual Product Pages
  ...PRODUCTS.map((product) => ({
    path: `/products/${product.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  })),

  // 15 Blog Post Guides
  ...BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const { path, priority, changeFrequency } of ALL_ROUTES) {
    const languages = hreflangLanguages(path);

    for (const locale of LOCALES) {
      sitemapEntries.push({
        url: localeUrl(locale, path),
        lastModified,
        changeFrequency,
        priority,
        alternates: { languages },
      });
    }
  }

  return sitemapEntries;
}
