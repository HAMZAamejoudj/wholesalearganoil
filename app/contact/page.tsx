import JsonLd from "@/app/components/JsonLd";
import ContactClient from "@/app/contact/ContactClient";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  contactPageSchema,
  webPageSchema,
} from "@/app/lib/schema";
import { getDictionary } from "../i18n/get-dictionary";
import { contactMetadata } from "../i18n/seo";

const dict = getDictionary("en");

export const metadata = contactMetadata("en", dict);

const contactSchema = buildSchemaGraph([
  webPageSchema({
    name: dict.meta.contact.title,
    description: dict.meta.contact.ogDescription,
    path: "/contact",
  }),
  breadcrumbSchema([
    { name: dict.nav.home, path: "/" },
    { name: dict.nav.contact, path: "/contact" },
  ]),
  contactPageSchema(),
]);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactClient locale="en" dict={dict} />
    </>
  );
}
