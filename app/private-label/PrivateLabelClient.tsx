"use client";

import { useEffect, useState, useRef } from "react";
import SiteHeader from "../components/SiteHeader";
import ContactCta from "../components/ContactCta";
import { HTML_LANG, isRtl, type Locale } from "../i18n/config";
import { en, type Dictionary } from "../i18n/en";

const OPTION_IMAGES = [
  "/assets/img/argan-oil-private-label-bottle.jpg",
  "/assets/img/moroccan-organic-cosmetics.jpg",
  "/assets/img/cosmetic-argan-bottles.jpg",
  "/assets/img/private-label-products.jpg",
  "/assets/img/argan-oil-bottles.jpg",
  "/assets/img/img10.jfif",
];

const GUARANTEE_ICONS = ["fa-map-marker-alt", "fa-leaf", "fa-sliders-h", "fa-box"];
const DOC_ICONS = [
  "fa-file-contract",
  "fa-shield-alt",
  "fa-passport",
  "fa-certificate",
  "fa-clipboard-list",
  "fa-file-invoice",
];

interface PrivateLabelClientProps {
  locale?: Locale;
  dict?: Dictionary;
}

export default function PrivateLabelClient({
  locale = "en",
  dict = en,
}: PrivateLabelClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const copy = dict.privateLabel;
  const footerCopy = dict.home.footer;
  const popupCopy = dict.home.popup;
  const ctaCopy = dict.contactCta;

  const popupTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoCloseTimerRef = useRef<NodeJS.Timeout | null>(null);

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
    popupTimerRef.current = setTimeout(() => {
      setIsPopupVisible(true);
    }, 4500);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
      if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isPopupVisible) {
      if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = setTimeout(() => {
        setIsPopupVisible(false);
      }, 7000);
    }
  }, [isPopupVisible]);

  const closePopup = () => {
    setIsPopupVisible(false);
    if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
    if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
  };

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

      <main className="private-page">
        {/* Hero Section */}
        <section className="private-page__hero">
          <div className="container private-page__hero-inner">
            <div className="reveal" data-delay="0s">
              <span className="private-page__eyebrow">{copy.hero.eyebrow}</span>
              <h1>{copy.hero.h1}</h1>
              <p className="private-page__hero-lede">{copy.hero.lede}</p>
              <div className="hero__actions" style={{ marginTop: "1.5rem" }}>
                <a className="btn btn--primary" href="#contact">
                  {copy.hero.primaryCta}
                </a>
                <a className="btn btn--ghost" href="#process">
                  {copy.hero.secondaryCta}
                </a>
              </div>
            </div>
            <div className="private-page__hero-media reveal" data-delay="0.1s">
              <img
                src="/assets/img/private-label-argan.jpg"
                alt={copy.hero.imageAlt}
              />
            </div>
          </div>
        </section>

        {/* Intro Split Section */}
        <section className="private-page__section">
          <div className="container private-page__split">
            <div className="private-page__split-copy reveal" data-delay="0s">
              <span className="private-page__eyebrow">{copy.split.eyebrow}</span>
              <h2>{copy.split.h2}</h2>
              <p>{copy.split.p1}</p>
              <p>{copy.split.p2}</p>
              <p className="private-page__quote">{copy.split.quote}</p>
            </div>
            <div
              className="private-page__split-copy reveal"
              data-delay="0.1s"
              style={{
                background: "#fafafa",
                padding: "2rem",
                borderRadius: "1rem",
                border: "1px solid rgba(15,27,44,0.06)",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "var(--ink)" }}>
                {copy.split.audienceTitle}
              </h3>
              <ul className="footer__contact" style={{ display: "grid", gap: "0.8rem", color: "var(--ink)" }}>
                {copy.split.audiences.map((audience) => (
                  <li key={audience}>
                    <i
                      className="fas fa-check"
                      style={{ color: "var(--sun-gold)", marginInlineEnd: "0.5rem" }}
                    ></i>{" "}
                    {audience}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--muted)" }}>
                {copy.split.footnote}
              </p>
            </div>
          </div>
        </section>

        {/* Market Section */}
        <section className="private-page__section private-page__section--border" style={{ background: "#fcf9f3" }}>
          <div className="container private-page__split private-page__split--reverse" style={{ alignItems: "center" }}>
            <div className="private-page__split-media reveal" data-delay="0.1s">
              <img
                src="/assets/img/private-label-products.jpg"
                alt={copy.market.imageAlt}
              />
            </div>
            <div className="private-page__split-copy reveal" data-delay="0s">
              <span className="private-page__eyebrow">{copy.market.eyebrow}</span>
              <h2>{copy.market.h2}</h2>
              <p>{copy.market.p1}</p>
              <p>{copy.market.p2}</p>
              <h3 style={{ fontSize: "1.1rem", marginTop: "1.2rem", color: "var(--ink)" }}>
                {copy.market.possibilitiesTitle}
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "0.5rem 1rem",
                  marginTop: "0.5rem",
                }}
              >
                {copy.market.possibilities.map((item) => (
                  <span key={item}>
                    <i
                      className="fas fa-circle"
                      style={{
                        fontSize: "0.45rem",
                        color: "var(--sun-gold)",
                        verticalAlign: "middle",
                        marginInlineEnd: "0.5rem",
                      }}
                    ></i>{" "}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="private-page__section private-page__section--border">
          <div className="container private-page__steps">
            <div className="private-page__steps-media reveal" data-delay="0.1s">
              <img
                src="/assets/img/argan-oil-private-label-bottle.jpg"
                alt={copy.workflow.imageAlt}
              />
            </div>
            <div className="private-page__steps-copy reveal" data-delay="0s">
              <span className="private-page__eyebrow">{copy.workflow.eyebrow}</span>
              <h2>{copy.workflow.h2}</h2>
              <ol className="private-page__step-list">
                {copy.workflow.steps.map((step) => (
                  <li key={step.step}>
                    <div>
                      <strong>{step.step}</strong>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Product Options Cards Grid */}
        <section className="private-page__section private-page__section--border" style={{ background: "#fcf9f3" }}>
          <div className="container">
            <div className="private-page__intro reveal" data-delay="0s">
              <span className="private-page__eyebrow">{copy.optionsIntro.eyebrow}</span>
              <h2>{copy.optionsIntro.h2}</h2>
              <p>{copy.optionsIntro.lede}</p>
            </div>

            <div className="private-page__products-grid">
              {copy.options.map((product, index) => (
                <article
                  key={product.title}
                  className="product-card reveal"
                  data-delay={`${index * 0.05}s`}
                >
                  <div className="product-card__media">
                    <img
                      src={OPTION_IMAGES[index] ?? "/assets/img/cosmetic-argan-bottles.jpg"}
                      alt={product.title}
                    />
                  </div>
                  <div className="product-card__inner">
                    <div className="product-card__header">
                      <span className="private-page__eyebrow">{product.tag}</span>
                      <h3 className="product-card__title">{product.title}</h3>
                    </div>
                    <div className="product-card__body">
                      <p>{product.description}</p>
                    </div>
                    <div className="product-card__meta">
                      <div className="product-card__meta-item">
                        <span>Sizes</span>
                        <strong>{product.sizes}</strong>
                      </div>
                      <div className="product-card__meta-item">
                        <span>Packaging</span>
                        <strong>{product.packaging}</strong>
                      </div>
                      <div className="product-card__meta-item">
                        <span>Min MOQ</span>
                        <strong>{product.moq}</strong>
                      </div>
                      <div className="product-card__meta-item">
                        <span>Lead Time</span>
                        <strong>{product.leadTime}</strong>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Branding Tier Section */}
        <section className="private-page__section private-page__section--border">
          <div className="container">
            <div className="private-page__intro reveal" data-delay="0s">
              <span className="private-page__eyebrow">{copy.tiersIntro.eyebrow}</span>
              <h2>{copy.tiersIntro.h2}</h2>
              <p>{copy.tiersIntro.lede}</p>
            </div>

            <div className="branding-levels">
              <div className="brand-tier reveal" data-delay="0s">
                <h3>{copy.whiteLabelTier.title}</h3>
                <p>{copy.whiteLabelTier.description}</p>
                <ul className="brand-tier__features">
                  {copy.whiteLabelTier.features.map((feature) => (
                    <li key={feature}>
                      <i className="fas fa-check-circle"></i> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="brand-tier brand-tier--premium reveal" data-delay="0.1s">
                <h3>{copy.privateLabelTier.title}</h3>
                <p>{copy.privateLabelTier.description}</p>
                <ul className="brand-tier__features">
                  {copy.privateLabelTier.features.map((feature) => (
                    <li key={feature}>
                      <i className="fas fa-check-circle"></i> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Brands Work With Us */}
        <section className="private-page__section private-page__section--border" style={{ background: "#fcf9f3" }}>
          <div className="container">
            <div className="private-page__intro reveal" data-delay="0s">
              <span className="private-page__eyebrow">{copy.guaranteesIntro.eyebrow}</span>
              <h2>{copy.guaranteesIntro.h2}</h2>
              <p>{copy.guaranteesIntro.lede}</p>
            </div>

            <div className="wholesale__strip" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
              {copy.guarantees.map((guarantee, index) => (
                <div className="wh-card reveal" data-delay={`${index * 0.05}s`} key={guarantee.title}>
                  <div className="wh-card__icon">
                    <i className={`fas ${GUARANTEE_ICONS[index]}`}></i>
                  </div>
                  <h3>{guarantee.title}</h3>
                  <p>{guarantee.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance / Documentation Section */}
        <section className="private-page__section private-page__section--border">
          <div className="container">
            <div className="private-page__intro reveal" data-delay="0s">
              <span className="private-page__eyebrow">{copy.complianceIntro.eyebrow}</span>
              <h2>{copy.complianceIntro.h2}</h2>
              <p>{copy.complianceIntro.lede}</p>
            </div>

            <div className="docs-list reveal" data-delay="0.1s">
              {copy.docs.map((doc, index) => (
                <article className="doc-card" key={doc.title}>
                  <i className={`fas ${DOC_ICONS[index]}`}></i>
                  <div>
                    <h3>{doc.title}</h3>
                    <p>{doc.body}</p>
                  </div>
                </article>
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
            <h4>{footerCopy.payment}</h4>
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
            <h4>{footerCopy.logistics}</h4>
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
            <h4>{footerCopy.contact}</h4>
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

      <div
        className={`bulk-popup ${isPopupVisible ? "is-visible" : ""}`}
        id="bulkPopup"
        aria-hidden={!isPopupVisible}
        style={{ display: isPopupVisible ? "flex" : "none" }}
      >
        <div className="bulk-popup__overlay" id="bulkPopupOverlay" onClick={closePopup}></div>
        <div className="bulk-popup__card" role="dialog" aria-labelledby="bulkPopupTitle">
          <button
            className="bulk-popup__close"
            id="bulkPopupClose"
            aria-label={popupCopy.close}
            onClick={closePopup}
          >
            <i className="fas fa-times"></i>
          </button>
          <span className="bulk-popup__eyebrow">{popupCopy.eyebrow}</span>
          <h3 id="bulkPopupTitle">{popupCopy.title}</h3>
          <p className="bulk-popup__lede">{popupCopy.lede}</p>
          <div className="bulk-popup__media">
            <img src="/assets/img/wholesale-argan-oil.jpg" alt={popupCopy.imageAlt} />
          </div>
          <p className="bulk-popup__body">{popupCopy.body}</p>
          <a
            className="btn btn--primary bulk-popup__cta"
            href="https://wa.me/212641517831"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp"></i> {popupCopy.cta}
          </a>
        </div>
      </div>
    </>
  );
}
