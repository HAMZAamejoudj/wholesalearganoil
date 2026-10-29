"use client";

import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";
import ContactCta from "../components/ContactCta";
import BulkPopup from "../components/BulkPopup";
import "./faq.css";
import { HTML_LANG, isRtl, type Locale } from "../i18n/config";
import { en, type Dictionary } from "../i18n/en";

interface FaqClientProps {
  locale?: Locale;
  dict?: Dictionary;
}

const FAQ_CATEGORIES: ("shipping" | "quality" | "private")[] = [
  "shipping",
  "quality",
  "quality",
  "private",
  "shipping",
  "quality",
  "shipping",
];

const SEARCH_PLACEHOLDER: Record<Locale, string> = {
  en: "Search questions or keywords...",
  fr: "Rechercher des questions ou mots-clés...",
  es: "Buscar preguntas o palabras clave...",
  ar: "ابحث في الأسئلة الشائعة أو الكلمات الدلالية...",
};

const SUPPORT_COPY: Record<Locale, { title: string; desc: string; cta: string }> = {
  en: {
    title: "Still have questions about ordering in bulk?",
    desc: "Our export specialists in Agadir are available on WhatsApp to assist with specs, COA, and custom quotes.",
    cta: "Chat on WhatsApp",
  },
  fr: {
    title: "Vous avez d'autres questions sur la commande en gros ?",
    desc: "Nos spécialistes à Agadir sont disponibles sur WhatsApp pour vous fournir les analyses COA et un devis sur-mesure.",
    cta: "Discuter sur WhatsApp",
  },
  es: {
    title: "¿Tienes más preguntas sobre pedidos al por mayor?",
    desc: "Nuestros especialistas en Agadir están disponibles en WhatsApp para especificaciones, COA y cotizaciones.",
    cta: "Chatear en WhatsApp",
  },
  ar: {
    title: "هل لديك استفسارات إضافية حول طلبيات الجملة؟",
    desc: "فريق التصدير في أكادير جاهز للتواصل الفوري عبر واتساب لتزويدك بشهادات التحليل COA وعروض الأسعار المخصصة.",
    cta: "تواصل عبر واتساب",
  },
};

export default function FaqClient({
  locale = "en",
  dict = en,
}: FaqClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const copy = dict.faq;
  const footerCopy = dict.home.footer;
  const popupCopy = dict.home.popup;
  const ctaCopy = dict.contactCta;
  const support = SUPPORT_COPY[locale] ?? SUPPORT_COPY.en;

  useEffect(() => {
    const html = document.documentElement;
    html.lang = HTML_LANG[locale];
    html.dir = isRtl(locale) ? "rtl" : "ltr";
    html.classList.toggle("is-rtl", isRtl(locale));
    return () => {
      html.lang = "en";
      html.dir = "ltr";
      html.classList.remove("is-rtl");
    };
  }, [locale]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 260) {
        setIsScrolled(true);
        setShowScrollTop(true);
      } else {
        setIsScrolled(false);
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const itemsWithCat = copy.items.map((item, index) => ({
    ...item,
    category: FAQ_CATEGORIES[index] ?? "quality",
    originalIndex: index,
  }));

  const filteredFaqs = itemsWithCat.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SiteHeader
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
        locale={locale}
        nav={dict.nav}
      />

      <main className="faq-page">
        <section className="faq-page__hero">
          <div className="container faq-page__hero-content">
            <span className="eyebrow" style={{ color: "var(--sun-gold)" }}>{copy.hero.eyebrow}</span>
            <h1>{copy.hero.h1}</h1>
            <p className="faq-page__hero-lede">{copy.hero.lede}</p>

            {/* Live Search Bar */}
            <div className="faq-search">
              <i className="fas fa-search faq-search__icon" aria-hidden="true"></i>
              <input
                type="text"
                className="faq-search__input"
                placeholder={SEARCH_PLACEHOLDER[locale] ?? SEARCH_PLACEHOLDER.en}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search FAQ"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="faq-search__clear"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="faq-page__content-wrap">
          <div className="container faq-page__layout">
            <div className="faq-controls">
              <div className="faq-filters" role="tablist" aria-label="FAQ Categories">
                <button
                  type="button"
                  className={`faq-filter-btn ${activeCategory === "all" ? "is-active" : ""}`}
                  onClick={() => setActiveCategory("all")}
                >
                  <i className="fas fa-th-large" aria-hidden="true"></i>
                  {copy.categories.all}
                </button>
                <button
                  type="button"
                  className={`faq-filter-btn ${activeCategory === "quality" ? "is-active" : ""}`}
                  onClick={() => setActiveCategory("quality")}
                >
                  <i className="fas fa-award" aria-hidden="true"></i>
                  {copy.categories.quality}
                </button>
                <button
                  type="button"
                  className={`faq-filter-btn ${activeCategory === "private" ? "is-active" : ""}`}
                  onClick={() => setActiveCategory("private")}
                >
                  <i className="fas fa-tags" aria-hidden="true"></i>
                  {copy.categories.private}
                </button>
                <button
                  type="button"
                  className={`faq-filter-btn ${activeCategory === "shipping" ? "is-active" : ""}`}
                  onClick={() => setActiveCategory("shipping")}
                >
                  <i className="fas fa-plane-departure" aria-hidden="true"></i>
                  {copy.categories.shipping}
                </button>
              </div>
            </div>

            {filteredFaqs.length > 0 ? (
              <div className="faq-list">
                {filteredFaqs.map((faq) => {
                  const isOpen = openIndexes.includes(faq.originalIndex);
                  return (
                    <article
                      key={faq.question}
                      className={`faq-item ${isOpen ? "is-open" : ""}`}
                    >
                      <button
                        type="button"
                        className="faq-item__btn"
                        onClick={() => toggleAccordion(faq.originalIndex)}
                        aria-expanded={isOpen}
                      >
                        <span className="faq-item__question">{faq.question}</span>
                        <span className="faq-item__icon" aria-hidden="true">
                          <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
                        </span>
                      </button>
                      {isOpen && (
                        <div className="faq-item__body">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="faq-empty">
                <i className="fas fa-question-circle" aria-hidden="true"></i>
                <p>
                  {locale === "ar"
                    ? "لم يتم العثور على أي سؤال يطابق بحثك."
                    : locale === "fr"
                    ? "Aucune question ne correspond à votre recherche."
                    : locale === "es"
                    ? "No se encontraron preguntas que coincidan con su búsqueda."
                    : "No questions matched your search criteria."}
                </p>
                <button
                  type="button"
                  className="btn btn--ghost"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                >
                  {locale === "ar"
                    ? "إعادة ضبط البحث"
                    : locale === "fr"
                    ? "Réinitialiser la recherche"
                    : locale === "es"
                    ? "Restablecer búsqueda"
                    : "Reset filters"}
                </button>
              </div>
            )}

            {/* Direct WhatsApp Support Box */}
            <div className="faq-support-box">
              <div className="faq-support-box__content">
                <strong className="faq-support-box__title">{support.title}</strong>
                <p>{support.desc}</p>
              </div>
              <a
                href="https://wa.me/212641517831?text=Hello%20Wholesale%20Argan%20Oil%2C%20I%20have%20a%20question%20about%20ordering."
                target="_blank"
                rel="noreferrer"
                className="faq-support-box__cta"
              >
                <i className="fab fa-whatsapp"></i> {support.cta}
              </a>
            </div>
          </div>
        </section>

        <ContactCta
          eyebrow={ctaCopy.eyebrow}
          title={ctaCopy.title}
          description={ctaCopy.description}
          panelTitle={ctaCopy.panelTitle}
          responseTime={ctaCopy.responseTime}
          whatsappCta={ctaCopy.whatsappCta}
          border
          reveal
        />
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <img src="/assets/img/logo.png" alt={footerCopy.logoAlt} />
            <p>{footerCopy.blurb}</p>
            <div className="socials">
              <a
                href="https://www.tiktok.com/@moroccanbeauty_shop"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div>
            <p className="footer__col-title">{footerCopy.payment}</p>
            <div
              style={{
                background: "rgba(15, 27, 44, 0.55)",
                padding: "0.8rem",
                borderRadius: "1.1rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                maxWidth: "240px",
              }}
            >
              <img
                src="/assets/img/payment.png"
                alt={footerCopy.payment}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "0.5rem" }}
              />
            </div>
          </div>
          <div>
            <p className="footer__col-title">{footerCopy.logistics}</p>
            <div
              style={{
                background: "rgba(15, 27, 44, 0.55)",
                padding: "0.8rem",
                borderRadius: "1.1rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                maxWidth: "240px",
              }}
            >
              <img
                src="/assets/img/transport-partner.png"
                alt={footerCopy.logistics}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "0.5rem" }}
              />
            </div>
          </div>
          <div>
            <p className="footer__col-title">{footerCopy.contact}</p>
            <ul className="footer__contact">
              <li>
                <i className="fas fa-map-marker-alt"></i> {footerCopy.address}
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> 0641517831
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:orders@moroccanorganica.com">orders@moroccanorganica.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2026 {footerCopy.rights}</p>
        </div>
      </footer>

      <button
        id="scrollToTop"
        className={`scroll-to-top ${showScrollTop ? "show" : ""}`}
        aria-label={dict.home.scrollTop}
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      <BulkPopup popupCopy={popupCopy} />
    </>
  );
}
