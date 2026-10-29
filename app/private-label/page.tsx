import JsonLd from "@/app/components/JsonLd";
import PrivateLabelClient from "./PrivateLabelClient";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  privateLabelServiceSchema,
  webPageSchema,
} from "@/app/lib/schema";
import { getDictionary } from "../i18n/get-dictionary";
import { privateLabelMetadata } from "../i18n/seo";

const dict = getDictionary("en");

export const metadata = privateLabelMetadata("en", dict);

const privateLabelSchema = buildSchemaGraph([
  webPageSchema({
    name: dict.meta.privateLabel.title,
    description: dict.meta.privateLabel.ogDescription,
    path: "/private-label",
  }),
  breadcrumbSchema([
    { name: dict.nav.home, path: "/" },
    { name: dict.nav.privateLabel, path: "/private-label" },
  ]),
  privateLabelServiceSchema(),
]);

export default function PrivateLabelPage() {
  return (
    <>
      <JsonLd data={privateLabelSchema} />
      <PrivateLabelClient locale="en" dict={dict} />
    </>
  );
}
