import JsonLd from "@/app/components/JsonLd";
import BenefitsClient from "./BenefitsClient";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  webPageSchema,
} from "@/app/lib/schema";
import { getDictionary } from "../i18n/get-dictionary";
import { benefitsMetadata } from "../i18n/seo";

const dict = getDictionary("en");

export const metadata = benefitsMetadata("en", dict);

const benefitsSchema = buildSchemaGraph([
  webPageSchema({
    name: dict.meta.benefits.title,
    description: dict.meta.benefits.ogDescription,
    path: "/benefits",
  }),
  breadcrumbSchema([
    { name: dict.nav.home, path: "/" },
    { name: dict.nav.benefits, path: "/benefits" },
  ]),
]);

export default function BenefitsPage() {
  return (
    <>
      <JsonLd data={benefitsSchema} />
      <BenefitsClient locale="en" dict={dict} />
    </>
  );
}
