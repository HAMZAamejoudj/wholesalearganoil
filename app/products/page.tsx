import JsonLd from "@/app/components/JsonLd";
import ProductsClient from "./ProductsClient";
import { PRODUCTS } from "@/app/lib/products";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  productListSchema,
  webPageSchema,
} from "@/app/lib/schema";
import { getDictionary } from "../i18n/get-dictionary";
import { productsMetadata } from "../i18n/seo";

const dict = getDictionary("en");

export const metadata = productsMetadata("en", dict);

const productsSchema = buildSchemaGraph([
  webPageSchema({
    name: dict.meta.products.title,
    description: dict.meta.products.ogDescription,
    path: "/products",
  }),
  breadcrumbSchema([
    { name: dict.nav.home, path: "/" },
    { name: dict.nav.products, path: "/products" },
  ]),
  productListSchema(
    PRODUCTS.map((product) => ({
      name: product.name,
      path: `/products/${product.slug}`,
    }))
  ),
]);

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productsSchema} />
      <ProductsClient locale="en" dict={dict} />
    </>
  );
}
