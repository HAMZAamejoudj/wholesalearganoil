"use client";

import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";
import BlogCardGrid from "./BlogCardGrid";
import BulkPopup from "../components/BulkPopup";
import { BUY_GUIDE_CARDS, USAGE_GUIDE_CARDS } from "./blog-cards";
import type { BlogPost } from "../lib/blog-posts";
import { en, type Dictionary } from "../i18n/en";
import { localePath, type Locale } from "../i18n/config";

interface BlogClientProps {
  locale?: Locale;
  dict?: Dictionary;
  buyCards?: BlogPost[];
  usageCards?: BlogPost[];
}

export default function BlogClient({
  locale = "en",
  dict = en,
  buyCards = BUY_GUIDE_CARDS,
  usageCards = USAGE_GUIDE_CARDS,
}: BlogClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const copy = dict.blog;
  const footerCopy = dict.home.footer;
  const popupCopy = dict.home.popup;

  // Handle scroll events
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

  return (
    <>
      <SiteHeader
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
        locale={locale}
        nav={dict.nav}
      />

      <main className="blog-page">
        <section className="blog-page__hero">
          <div className="container blog-page__hero-content">
            <h1>{copy.heroTitle}</h1>
            <p className="blog-page__hero-lede">{copy.heroLede}</p>
          </div>
        </section>

        <div className="container blog-page__intro">
          <p>{copy.intro}</p>
        </div>

        <section className="blog-page__cards-section">
          <div className="container">
            <div className="blog-page__section-head">
              <span className="about-page__eyebrow">{copy.buyingGuidesEyebrow}</span>
              <h2>{copy.buyingGuidesTitle}</h2>
            </div>
            <BlogCardGrid cards={buyCards} locale={locale} cta={copy.readArticle} />
          </div>
        </section>

        <section className="blog-page__cards-section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="blog-page__section-head">
              <span className="about-page__eyebrow">{copy.usageGuidesEyebrow}</span>
              <h2>{copy.usageGuidesTitle}</h2>
            </div>
            <BlogCardGrid cards={usageCards} locale={locale} cta={copy.readArticle} />
          </div>
        </section>

        <section className="blog-page__extras">
          <div className="container blog-page__extras-inner">
            <div className="blog-panel blog-panel--gold">
              <h2>{copy.howToIdentify.title}</h2>
              <ul className="blog-card__list" style={{ marginTop: "0.5rem" }}>
                {copy.howToIdentify.items.map((item) => (
                  <li key={item.strong}>
                    <strong>{item.strong}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="blog-panel">
              <h2>{copy.cities.title}</h2>
              <div className="blog-panel__cities">
                {copy.cities.items.map((c) => (
                  <p key={c.city}>
                    <strong>{c.city}</strong> {c.text}
                  </p>
                ))}
              </div>
            </div>

            <div className="blog-panel">
              <h2>{copy.pricing.title}</h2>
              <div className="blog-page__table-wrapper">
                <table className="blog-page__table">
                  <thead>
                    <tr>
                      <th>{copy.pricing.sizeHeader}</th>
                      <th>{copy.pricing.priceHeader}</th>
                      <th>{copy.pricing.usdHeader}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>30 ml</td>
                      <td>30–60 MAD</td>
                      <td>$3–6 USD</td>
                    </tr>
                    <tr>
                      <td>100 ml</td>
                      <td>80–150 MAD</td>
                      <td>$8–15 USD</td>
                    </tr>
                    <tr>
                      <td>1 L</td>
                      <td>500–900 MAD</td>
                      <td>$50–90 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ marginTop: "0.85rem", fontSize: "0.88rem", fontStyle: "italic" }}>
                {copy.pricing.note}
              </p>
            </div>

            <div className="blog-panel">
              <h2>{copy.tips.title}</h2>
              <ol>
                {copy.tips.items.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ol>
            </div>

            <div className="blog-panel">
              <h2>{copy.resources.title}</h2>
              <div className="blog-page__resources-grid">
                <a className="blog-resource" href={localePath(locale, "/#solutions")}>
                  <i className="fas fa-boxes"></i> {copy.resources.wholesale}
                </a>
                <a className="blog-resource" href={localePath(locale, "/#benefits")}>
                  <i className="fas fa-hand-sparkles"></i> {copy.resources.benefits}
                </a>
                <a className="blog-resource" href={localePath(locale, "/private-label")}>
                  <i className="fas fa-tags"></i> {copy.resources.privateLabel}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <img src="/assets/img/logo.png" alt={footerCopy.logoAlt} />
            <p>{footerCopy.blurb}</p>
            <div className="socials">
              <a href="https://www.tiktok.com/@moroccanbeauty_shop" target="_blank" rel="noreferrer" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            </div>
          </div>
          <div>
            <p className="footer__col-title">{footerCopy.payment}</p>
            <div style={{ background: "rgba(15, 27, 44, 0.55)", padding: "0.8rem", borderRadius: "1.1rem", border: "1px solid rgba(255, 255, 255, 0.1)", maxWidth: "240px" }}>
              <img src="/assets/img/payment.png" alt={footerCopy.payment} style={{ width: "100%", height: "auto", display: "block", borderRadius: "0.5rem" }} />
            </div>
          </div>
          <div>
            <p className="footer__col-title">{footerCopy.logistics}</p>
            <div style={{ background: "rgba(15, 27, 44, 0.55)", padding: "0.8rem", borderRadius: "1.1rem", border: "1px solid rgba(255, 255, 255, 0.1)", maxWidth: "240px" }}>
              <img src="/assets/img/transport-partner.png" alt={footerCopy.logistics} style={{ width: "100%", height: "auto", display: "block", borderRadius: "0.5rem" }} />
            </div>
          </div>
          <div>
            <p className="footer__col-title">{footerCopy.contact}</p>
            <ul className="footer__contact">
              <li><i className="fas fa-map-marker-alt"></i> {footerCopy.address}</li>
              <li><i className="fas fa-phone-alt"></i> 0641517831</li>
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
