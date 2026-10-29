import HomeClient from "./HomeClient";
import { getDictionary } from "./i18n/get-dictionary";
import { homeMetadata } from "./i18n/seo";

const dict = getDictionary("en");

export const metadata = homeMetadata("en", dict);

export default function HomePage() {
  return <HomeClient locale="en" dict={dict} />;
}
