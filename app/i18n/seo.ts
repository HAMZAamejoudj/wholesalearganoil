import type { Metadata } from "next";
import { HTML_LANG, LOCALES, OG_LOCALE, localePath, type Locale } from "./config";
import type { Dictionary } from "./en";
import { SITE_URL } from "../lib/site";

export function localeUrl(locale: Locale, path = "/"): string {
  const localized = localePath(locale, path);
  if (localized === "/") {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${localized.endsWith("/") ? localized : `${localized}/`}`;
}

export function hreflangLanguages(path = "/"): Record<string, string> {
  const languages: Record<string, string> = {
    "x-default": localeUrl("en", path),
  };
  for (const locale of LOCALES) {
    languages[HTML_LANG[locale]] = localeUrl(locale, path);
  }
  return languages;
}

interface PageMetaConfig {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  image?: string;
}

function buildPageMetadata({
  locale,
  path,
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  image = "/assets/img/cosmetic-argan-bottles.jpg",
}: PageMetaConfig): Metadata {
  const canonical = localeUrl(locale, path);
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      type: "website",
      locale: OG_LOCALE[locale],
      siteName: "Wholesale Argan Oil",
      url: canonical,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle || ogTitle || title,
      description: twitterDescription || ogDescription || description,
      images: [imageUrl],
    },
    alternates: {
      canonical,
      languages: hreflangLanguages(path),
    },
  };
}

export function homeMetadata(locale: Locale, dict: Dictionary): Metadata {
  const meta = dict.meta.home ?? dict.meta;
  return buildPageMetadata({
    locale,
    path: "/",
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
    twitterTitle: meta.twitterTitle,
    twitterDescription: meta.twitterDescription,
    image: "/assets/img/cosmetic-argan-bottles.jpg",
  });
}

export function aboutMetadata(locale: Locale, dict: Dictionary): Metadata {
  const meta = dict.meta.about;
  return buildPageMetadata({
    locale,
    path: "/about",
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
    twitterTitle: meta.twitterTitle,
    twitterDescription: meta.twitterDescription,
    image: "/assets/img/what-is-argan-oil.webp",
  });
}

export function productsMetadata(locale: Locale, dict: Dictionary): Metadata {
  const meta = dict.meta.products;
  return buildPageMetadata({
    locale,
    path: "/products",
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
    twitterTitle: meta.twitterTitle,
    twitterDescription: meta.twitterDescription,
    image: "/assets/img/wholesale-argan-oil.jpg",
  });
}

export function privateLabelMetadata(locale: Locale, dict: Dictionary): Metadata {
  const meta = dict.meta.privateLabel;
  return buildPageMetadata({
    locale,
    path: "/private-label",
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
    twitterTitle: meta.twitterTitle,
    twitterDescription: meta.twitterDescription,
    image: "/assets/img/private-label-argan.jpg",
  });
}

export function benefitsMetadata(locale: Locale, dict: Dictionary): Metadata {
  const meta = dict.meta.benefits;
  return buildPageMetadata({
    locale,
    path: "/benefits",
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
    twitterTitle: meta.twitterTitle,
    twitterDescription: meta.twitterDescription,
    image: "/assets/img/argan-beauty.jpg",
  });
}

export function faqMetadata(locale: Locale, dict: Dictionary): Metadata {
  const meta = dict.meta.faq;
  return buildPageMetadata({
    locale,
    path: "/faq",
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
    twitterTitle: meta.twitterTitle,
    twitterDescription: meta.twitterDescription,
    image: "/assets/img/wholesale-argan-oil.jpg",
  });
}

export function contactMetadata(locale: Locale, dict: Dictionary): Metadata {
  const meta = dict.meta.contact;
  return buildPageMetadata({
    locale,
    path: "/contact",
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
    twitterTitle: meta.twitterTitle,
    twitterDescription: meta.twitterDescription,
    image: "/assets/img/cosmetic-argan-bottles.jpg",
  });
}

export function blogMetadata(locale: Locale, dict: Dictionary): Metadata {
  const meta = dict.meta.blog;
  return buildPageMetadata({
    locale,
    path: "/blog",
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
    twitterTitle: meta.twitterTitle,
    twitterDescription: meta.twitterDescription,
    image: "/assets/img/argan-oil-from-morocco.jpg",
  });
}

export function productDetailMetadata(
  locale: Locale,
  product: {
    slug: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    image: string;
  }
): Metadata {
  return buildPageMetadata({
    locale,
    path: `/products/${product.slug}`,
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.keywords,
    ogTitle: product.metaTitle,
    ogDescription: product.metaDescription,
    twitterTitle: product.metaTitle,
    twitterDescription: product.metaDescription,
    image: product.image,
  });
}

export function blogPostMetadata(
  locale: Locale,
  post: {
    slug: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    image: string;
  }
): Metadata {
  return buildPageMetadata({
    locale,
    path: `/blog/${post.slug}`,
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    ogTitle: post.metaTitle,
    ogDescription: post.metaDescription,
    twitterTitle: post.metaTitle,
    twitterDescription: post.metaDescription,
    image: post.image,
  });
}
