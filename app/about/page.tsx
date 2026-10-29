import JsonLd from "@/app/components/JsonLd";
import AboutClient from "./AboutClient";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  webPageSchema,
} from "@/app/lib/schema";
import { getDictionary } from "../i18n/get-dictionary";
import { aboutMetadata } from "../i18n/seo";

const dict = getDictionary("en");

export const metadata = aboutMetadata("en", dict);

const aboutSchema = buildSchemaGraph([
  webPageSchema({
    name: dict.meta.about.title,
    description: dict.meta.about.ogDescription,
    path: "/about",
  }),
  breadcrumbSchema([
    { name: dict.nav.home, path: "/" },
    { name: dict.nav.about, path: "/about" },
  ]),
]);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <AboutClient locale="en" dict={dict} />
    </>
  );
}
