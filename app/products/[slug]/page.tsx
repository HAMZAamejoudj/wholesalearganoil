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
import { getProductBySlug, getRelatedProducts, PRODUCTS } from "@/app/lib/products";
import { productDetailMetadata } from "@/app/i18n/seo";
import { en } from "@/app/i18n/en";
import ProductDetailClient from "./ProductDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return productDetailMetadata("en", product);
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const path = `/products/${product.slug}`;
  const related = getRelatedProducts(product.slug);

  const schema = buildSchemaGraph([
    webPageSchema({
      name: product.h1,
      description: product.metaDescription,
      path,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
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
        locale="en"
        dict={en}
      />
    </>
  );
}
