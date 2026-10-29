import { Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { HTML_LANG, isPrefixLocale, isRtl } from "../i18n/config";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "es" }, { lang: "ar" }];
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isPrefixLocale(lang)) notFound();

  const dir = isRtl(lang) ? "rtl" : "ltr";
  const htmlLang = HTML_LANG[lang];
  const cairoClass = lang === "ar" ? cairo.variable : "";

  return (
    <div lang={htmlLang} dir={dir} className={cairoClass || undefined}>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(htmlLang)};document.documentElement.dir=${JSON.stringify(dir)};document.documentElement.classList.toggle("is-rtl",${dir === "rtl"});${lang === "ar" ? `document.documentElement.classList.add(${JSON.stringify(cairo.variable)});` : ""}`,
        }}
      />
      {children}
    </div>
  );
}
