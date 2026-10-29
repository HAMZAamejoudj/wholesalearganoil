"use client";

import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";
import ContactCta from "../components/ContactCta";
import BulkPopup from "../components/BulkPopup";
import { HTML_LANG, isRtl, type Locale } from "../i18n/config";
import { en, type Dictionary } from "../i18n/en";

interface BenefitsClientProps {
  locale?: Locale;
  dict?: Dictionary;
}

const BENEFIT_ICONS = ["fa-globe", "fa-heart", "fa-flask", "fa-file-invoice-dollar"];

export default function BenefitsClient({
  locale = "en",
  dict = en,
}: BenefitsClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const copy = dict.benefits;
  const footerCopy = dict.home.footer;
  const popupCopy = dict.home.popup;
  const ctaCopy = dict.contactCta;

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

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && revealItems.length) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              const delay = target.getAttribute("data-delay") || "0s";
              target.style.setProperty("--reveal-delay", delay);
              target.classList.add("is-visible");
              revealObserver.unobserve(target);
            }
          });
        },
        { threshold: 0.15 }
      );

      revealItems.forEach((item) => revealObserver.observe(item));
      return () => revealObserver.disconnect();
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }
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

      <main className="benefits-page">
        {/* Hero Section */}
        <section className="benefits-page__hero">
          <div className="container benefits-page__hero-inner">
            <div className="reveal" data-delay="0s">
              <span className="benefits-page__eyebrow">{copy.hero.eyebrow}</span>
              <h1>{copy.hero.h1}</h1>
              <p className="benefits-page__hero-lede">{copy.hero.lede}</p>
              <div className="hero__actions" style={{ marginTop: "1.5rem" }}>
                <a className="btn btn--primary" href="#contact">
                  {copy.hero.primaryCta}
                </a>
                <a className="btn btn--ghost" href="#hydration">
                  {copy.hero.secondaryCta}
                </a>
              </div>
            </div>
            <div className="benefits-page__hero-media reveal" data-delay="0.1s">
              <img
                src="/assets/img/what-is-argan-oil.webp"
                alt={copy.hero.imageAlt}
              />
            </div>
          </div>
        </section>

        {/* Section 1: Hydration & Moisturization */}
        <section id="hydration" className="benefits-page__section">
          <div className="container benefits-page__split benefits-page__split--reverse">
            <div className="benefits-page__split-media reveal" data-delay="0.1s">
              <img
                src="/assets/img/cosmetic-argan.jpg"
                alt={copy.hydration.imageAlt}
              />
            </div>
            <div className="benefits-page__split-copy reveal" data-delay="0s">
              <span className="benefits-page__eyebrow">{copy.hydration.eyebrow}</span>
              <h2>{copy.hydration.h2}</h2>
              <p>{copy.hydration.p1}</p>
              <ul className="benefits-page__list">
                {copy.hydration.items.map((item) => (
                  <li key={item}>
                    <i className="fas fa-check"></i> {item}
                  </li>
                ))}
              </ul>
              <p>{copy.hydration.p2}</p>
            </div>
          </div>
        </section>

        {/* Section 2: Anti-Aging Benefits */}
        <section className="benefits-page__section benefits-page__section--border" style={{ background: "#fcf9f3" }}>
          <div className="container benefits-page__split">
            <div className="benefits-page__split-media reveal" data-delay="0.1s">
              <img
                src="/assets/img/argan-beauty.jpg"
                alt={copy.antiAging.imageAlt}
              />
            </div>
            <div className="benefits-page__split-copy reveal" data-delay="0s">
              <span className="benefits-page__eyebrow">{copy.antiAging.eyebrow}</span>
              <h2>{copy.antiAging.h2}</h2>
              <p>{copy.antiAging.p1}</p>
              <ul className="benefits-page__list">
                {copy.antiAging.items.map((item) => (
                  <li key={item}>
                    <i className="fas fa-check"></i> {item}
                  </li>
                ))}
              </ul>
              <p>{copy.antiAging.p2}</p>
            </div>
          </div>
        </section>

        {/* Section 3: Hair Health */}
        <section className="benefits-page__section benefits-page__section--border">
          <div className="container benefits-page__split benefits-page__split--reverse">
            <div className="benefits-page__split-media reveal" data-delay="0.1s">
              <img
                src="/assets/img/argan-oil-for-hair.jpg"
                alt={copy.hairHealth.imageAlt}
              />
            </div>
            <div className="benefits-page__split-copy reveal" data-delay="0s">
              <span className="benefits-page__eyebrow">{copy.hairHealth.eyebrow}</span>
              <h2>{copy.hairHealth.h2}</h2>
              <p>{copy.hairHealth.p1}</p>
              <p style={{ fontWeight: "600", color: "var(--ink)", margin: "1rem 0 0.5rem" }}>
                {copy.hairHealth.subhead}
              </p>
              <ul className="benefits-page__list">
                {copy.hairHealth.items.map((item) => (
                  <li key={item}>
                    <i className="fas fa-check"></i> {item}
                  </li>
                ))}
              </ul>
              <p>{copy.hairHealth.p2}</p>
            </div>
          </div>
        </section>

        {/* Section 4: Nail and Cuticle Care */}
        <section className="benefits-page__section benefits-page__section--border" style={{ background: "#fcf9f3" }}>
          <div className="container benefits-page__split">
            <div className="benefits-page__split-media reveal" data-delay="0.1s">
              <img
                src="/assets/img/cosmetic-argan-bottles.jpg"
                alt={copy.nails.imageAlt}
              />
            </div>
            <div className="benefits-page__split-copy reveal" data-delay="0s">
              <span className="benefits-page__eyebrow">{copy.nails.eyebrow}</span>
              <h2>{copy.nails.h2}</h2>
              <p>{copy.nails.p1}</p>
              <p>{copy.nails.p2}</p>
            </div>
          </div>
        </section>

        {/* Section 5: B2B Brand Benefits */}
        <section className="benefits-page__section benefits-page__section--border">
          <div className="container">
            <div className="benefits-page__intro reveal" data-delay="0s">
              <span className="benefits-page__eyebrow">{copy.b2bValue.eyebrow}</span>
              <h2>{copy.b2bValue.h2}</h2>
              <p>{copy.b2bValue.lede}</p>
            </div>

            <div className="benefits-page__grid">
              {copy.b2bValue.cards.map((card, index) => (
                <div
                  className="benefit-card reveal"
                  data-delay={`${index * 0.05}s`}
                  key={card.title}
                >
                  <div className="benefit-card__icon">
                    <i className={`fas ${BENEFIT_ICONS[index]}`}></i>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
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
