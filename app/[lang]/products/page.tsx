import { notFound } from "next/navigation";
import ProductsClient from "../../products/ProductsClient";
import JsonLd from "../../components/JsonLd";
import { isPrefixLocale, localePath, SCHEMA_LANG } from "../../i18n/config";
import { getDictionary } from "../../i18n/get-dictionary";
import { productsMetadata } from "../../i18n/seo";
import { PRODUCTS } from "../../lib/products";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  productListSchema,
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
  return productsMetadata(lang, getDictionary(lang));
}

export default async function LocalizedProductsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isPrefixLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const path = localePath(lang, "/products");

  const schema = buildSchemaGraph([
    webPageSchema({
      name: dict.meta.products.title,
      description: dict.meta.products.ogDescription,
      path,
      inLanguage: SCHEMA_LANG[lang],
    }),
    breadcrumbSchema([
      { name: dict.nav.home, path: localePath(lang, "/") },
      { name: dict.nav.products, path },
    ]),
    productListSchema(
      PRODUCTS.map((product) => ({
        name: dict.home.products.cards[product.slug as keyof typeof dict.home.products.cards]?.title ?? product.name,
        path: localePath(lang, `/products/${product.slug}`),
      }))
    ),
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <ProductsClient locale={lang} dict={dict} />
    </>
  );
}

