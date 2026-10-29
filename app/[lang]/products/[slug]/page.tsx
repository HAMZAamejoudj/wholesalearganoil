import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/app/components/JsonLd";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  faqPageSchema,
  productSchema,
  webPageSchema,
} from "@/app/lib/schema";
import { PRODUCTS } from "@/app/lib/products";
import {
  getLocalizedProduct,
  getLocalizedRelatedProducts,
} from "@/app/lib/products-i18n";
import { NON_DEFAULT_LOCALES, resolveLocale, localePath } from "@/app/i18n/config";
import { getDictionary } from "@/app/i18n/get-dictionary";
import { productDetailMetadata } from "@/app/i18n/seo";
import ProductDetailClient from "@/app/products/[slug]/ProductDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of NON_DEFAULT_LOCALES) {
    for (const product of PRODUCTS) {
      params.push({ lang, slug: product.slug });
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
  const product = getLocalizedProduct(slug, locale);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return productDetailMetadata(locale, product);
}

export default async function LocalizedProductDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const dict = getDictionary(locale);
  const product = getLocalizedProduct(slug, locale);

  if (!product) {
    notFound();
  }

  const path = localePath(locale, `/products/${product.slug}`);
  const related = getLocalizedRelatedProducts(product.slug, locale);

  const schema = buildSchemaGraph([
    webPageSchema({
      name: product.h1,
      description: product.metaDescription,
      path,
    }),
    breadcrumbSchema([
      { name: dict.nav.home, path: localePath(locale, "/") },
      { name: dict.nav.products, path: localePath(locale, "/products") },
      { name: product.name, path },
    ]),
    productSchema({
      name: product.name,
      description: product.metaDescription,
      path,
      image: product.image,
    }),
    faqPageSchema(product.faq, path),
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <ProductDetailClient
        product={product}
        related={related}
        locale={locale}
        dict={dict}
      />
    </>
  );
}
