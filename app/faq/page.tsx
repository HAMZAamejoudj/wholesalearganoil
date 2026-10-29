import JsonLd from "@/app/components/JsonLd";
import FaqClient from "@/app/faq/FaqClient";
import {
  FAQ_SCHEMA_ENTITIES,
  breadcrumbSchema,
  buildSchemaGraph,
  faqPageSchema,
  webPageSchema,
} from "@/app/lib/schema";
import { getDictionary } from "../i18n/get-dictionary";
import { faqMetadata } from "../i18n/seo";

const dict = getDictionary("en");

export const metadata = faqMetadata("en", dict);

const faqSchema = buildSchemaGraph([
  webPageSchema({
    name: dict.meta.faq.title,
    description: dict.meta.faq.ogDescription,
    path: "/faq",
  }),
  breadcrumbSchema([
    { name: dict.nav.home, path: "/" },
    { name: dict.nav.faq, path: "/faq" },
  ]),
  faqPageSchema(FAQ_SCHEMA_ENTITIES),
]);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <FaqClient locale="en" dict={dict} />
    </>
  );
}
