"use client";

import { useEffect, useState, useRef } from "react";
import JsonLd from "./components/JsonLd";
import ProductCard from "./components/ProductCard";
import SiteHeader from "./components/SiteHeader";
import { HTML_LANG, SCHEMA_LANG, isRtl, localePath, type Locale } from "./i18n/config";
import type { Dictionary } from "./i18n/en";
import { PRODUCTS } from "./lib/products";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  productSchema,
  webPageSchema,
  wholesaleServiceSchema,
} from "./lib/schema";

type HomeClientProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function HomeClient({ locale, dict }: HomeClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoCloseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const copy = dict.home;
  const homePath = localePath(locale);

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
    }, 2500);

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
    }

    revealItems.forEach((item) => item.classList.add("is-visible"));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const homeSchema = buildSchemaGraph([
    webPageSchema({
      name: dict.meta.title,
      description: dict.meta.ogDescription,
      path: homePath,
      inLanguage: SCHEMA_LANG[locale],
    }),
    breadcrumbSchema([{ name: dict.nav.home, path: homePath }]),
    productSchema(),
    wholesaleServiceSchema(),
  ]);

  const applicationIcons = ["fa-spa", "fa-leaf", "fa-flask"] as const;
  const solutionIcons = ["fa-cubes", "fa-tags", "fa-sliders-h", "fa-globe-americas"] as const;
  const processIcons = [
    "fa-clipboard-list",
    "fa-file-invoice-dollar",
    "fa-handshake",
    "fa-industry",
    "fa-shipping-fast",
  ] as const;
  const certIcons = ["fa-certificate", "fa-file-alt", "fa-shield-alt", "fa-passport"] as const;

  return (
    <>
      <JsonLd data={homeSchema} />

      <SiteHeader
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
        locale={locale}
        nav={dict.nav}
      />

      <main>
        <section id="hero" className="hero">
          <div className="container hero__grid">
            <div className="hero__text reveal" data-delay="0s">
              <span className="eyebrow">{copy.hero.eyebrow}</span>
              <h1>{copy.hero.h1}</h1>
              <p>{copy.hero.p1}</p>
              <p style={{ marginTop: "0.5rem" }}>{copy.hero.p2}</p>
              <div className="hero__trust" aria-label={copy.hero.trustLabel}>
                {copy.hero.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#contact">
                  {copy.hero.primaryCta}
                </a>
                <a className="btn btn--ghost" href="#quality">
                  {copy.hero.secondaryCta}
                </a>
              </div>
            </div>
            <div className="hero__visual reveal" data-delay="0.15s">
              <div className="hero__orb"></div>
              <img
                src="/assets/img/cosmetic-argan-bottles.jpg"
                alt={copy.hero.imageAlt}
                className="hero__img"
              />
              <div className="hero__stats">
                {copy.stats.map((stat) => (
                  <div className="stat" key={stat.label}>
                    <strong>{stat.strong}</strong>
                    {stat.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="section supplier">
          <div className="container">
            <div className="section-title center">
              <span className="eyebrow" style={{ color: "var(--sun-gold)" }}>
                {copy.benefits.eyebrow}
              </span>
              <h2>{copy.benefits.h2}</h2>
              <p style={{ maxWidth: "800px", margin: "0.5rem auto 1.5rem" }}>
                {copy.benefits.lede}
              </p>
            </div>

            <div className="about__grid" style={{ alignItems: "center" }}>
              <div className="reveal" data-delay="0s" style={{ textAlign: "start", margin: "0" }}>
                <h3>{copy.benefits.h3}</h3>
                <p style={{ marginTop: "1rem" }}>{copy.benefits.intro}</p>
                <ul style={{ listStyle: "none", marginTop: "1rem", display: "grid", gap: "0.8rem" }}>
                  {copy.benefits.items.map((item) => (
                    <li key={item.title}>
                      <i
                        className="fas fa-check"
                        style={{ color: "var(--sun-gold)", marginInlineEnd: "0.5rem" }}
                      ></i>{" "}
                      <strong>{item.title}</strong> {item.body}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: "1.2rem", fontWeight: "600", color: "var(--ink)" }}>
                  {copy.benefits.closing}
                </p>
              </div>
              <div className="reveal" data-delay="0.15s">
                <img
                  src="/assets/img/argan-beauty.jpg"
                  alt={copy.benefits.imageAlt}
                  className="section-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="quality" className="section grades">
          <div className="container">
            <div className="section-title center">
              <span className="eyebrow" style={{ color: "var(--sun-gold)" }}>
                {copy.products.eyebrow}
              </span>
              <h2>{copy.products.h2}</h2>
              <p>{copy.products.lede}</p>
            </div>

            <div className="grade__grid" style={{ marginBottom: "3rem" }}>
              {PRODUCTS.slice(0, 3).map((product, index) => {
                const card = copy.products.cards[product.slug as keyof typeof copy.products.cards];
                return (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    delay={`${index * 0.1}s`}
                    chip={card.chip}
                    title={card.title}
                    summary={card.summary}
                    imageAlt={card.imageAlt}
                    cta={copy.products.viewDetails}
                    locale={locale}
                  />
                );
              })}
            </div>

            <div className="supplier__cards" style={{ margin: "0 auto", maxWidth: "760px" }}>
              {PRODUCTS.slice(3).map((product, index) => {
                const card = copy.products.cards[product.slug as keyof typeof copy.products.cards];
                return (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    delay={`${index * 0.1}s`}
                    chip={card.chip}
                    title={card.title}
                    summary={card.summary}
                    imageAlt={card.imageAlt}
                    cta={copy.products.viewDetails}
                    locale={locale}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section id="applications" className="section wholesale">
          <div className="container">
            <div className="section-title center">
              <span className="eyebrow" style={{ color: "var(--sun-gold)" }}>
                {copy.applications.eyebrow}
              </span>
              <h2>{copy.applications.h2}</h2>
              <p>{copy.applications.lede}</p>
            </div>

            <div className="wholesale__strip">
              {copy.applications.cards.map((card, index) => (
                <article
                  className="wh-card reveal"
                  data-delay={`${index * 0.1}s`}
                  key={card.title}
                >
                  <div className="wh-card__icon">
                    <i className={`fas ${applicationIcons[index]}`}></i>
                  </div>
                  <span className="wh-card__tag">{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="section solutions">
          <div className="container">
            <div className="section-title center">
              <span className="eyebrow solutions__eyebrow">{copy.solutions.eyebrow}</span>
              <h2>{copy.solutions.h2}</h2>
              <p>{copy.solutions.lede}</p>
            </div>

            <div className="solutions__layout">
              <div className="solutions__media reveal" data-delay="0s">
                <div className="solutions__media-glow" aria-hidden="true"></div>
                <div className="solutions__media-frame">
                  <img
                    src="/assets/img/pallet-export.jpg"
                    alt={copy.solutions.imageAlt}
                    className="solutions__image"
                  />
                  <span className="solutions__badge">
                    <i className="fas fa-shipping-fast"></i>
                    {copy.solutions.badge}
                  </span>
                </div>
              </div>

              <div className="solutions__content reveal" data-delay="0.15s">
                <div className="solutions__panel">
                  <h3>{copy.solutions.h3}</h3>
                  <p className="solutions__lede">{copy.solutions.intro}</p>

                  <div className="solutions__features">
                    {copy.solutions.features.map((feature, index) => (
                      <article className="solutions__feature" key={feature.title}>
                        <div className="solutions__feature-icon">
                          <i className={`fas ${solutionIcons[index]}`}></i>
                        </div>
                        <div>
                          <strong>{feature.title}</strong>
                          <p>{feature.body}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section process">
          <div className="container">
            <div className="section-title center">
              <span className="eyebrow process__eyebrow">{copy.process.eyebrow}</span>
              <h2>{copy.process.h2}</h2>
              <p>{copy.process.lede}</p>
            </div>

            <div className="process__grid">
              {copy.process.steps.map((step, index) => (
                <article
                  className="process__card reveal"
                  data-delay={`${index * 0.08}s`}
                  key={step.title}
                >
                  <div className="process__card-head">
                    <span className="process__index">{String(index + 1).padStart(2, "0")}</span>
                    <div className="process__card-icon">
                      <i className={`fas ${processIcons[index]}`}></i>
                    </div>
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section About">
          <div className="container">
            <div className="section-title center">
              <span className="eyebrow" style={{ color: "var(--sun-gold)" }}>
                {copy.certs.eyebrow}
              </span>
              <h2>{copy.certs.h2}</h2>
              <p>{copy.certs.lede}</p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.5rem",
                marginTop: "2rem",
              }}
            >
              {copy.certs.items.map((item, index) => (
                <div
                  className="card reveal"
                  data-delay={`${index * 0.08}s`}
                  key={item.title}
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <div style={{ fontSize: "2rem", color: "var(--olive)" }}>
                    <i className={`fas ${certIcons[index]}`}></i>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p style={{ fontSize: "0.88rem" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about-us" className="section about">
          <div className="container">
            <div className="about__grid" style={{ alignItems: "center", gap: "3rem" }}>
              <div className="reveal" data-delay="0s" style={{ textAlign: "start" }}>
                <span className="eyebrow" style={{ color: "var(--clay)" }}>
                  {copy.serve.eyebrow}
                </span>
                <h2>{copy.serve.h2}</h2>
                <p style={{ marginTop: "1rem" }}>{copy.serve.lede}</p>
                <ul style={{ marginTop: "1rem", listStyle: "none", display: "grid", gap: "0.5rem" }}>
                  {copy.serve.buyers.map((buyer) => (
                    <li key={buyer}>
                      <i
                        className="fas fa-check"
                        style={{ color: "var(--sun-gold)", marginInlineEnd: "0.5rem" }}
                      ></i>{" "}
                      {buyer}
                    </li>
                  ))}
                </ul>

                <h3 style={{ marginTop: "2rem" }}>{copy.serve.h3}</h3>
                <p style={{ marginTop: "0.8rem" }}>{copy.serve.body}</p>
              </div>
              <div className="reveal" data-delay="0.15s">
                <img
                  src="/assets/img/argan-oil-morocco.jpg"
                  alt={copy.serve.imageAlt}
                  className="section-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section wholesale">
          <div className="container">
            <div className="about__grid contact__grid" style={{ gap: "2.5rem", alignItems: "stretch" }}>
              <div
                className="card reveal"
                data-delay="0s"
                style={{ padding: "2.5rem", display: "grid", gap: "1.2rem" }}
              >
                <div>
                  <span className="eyebrow" style={{ color: "var(--sun-gold)" }}>
                    {copy.contact.eyebrow}
                  </span>
                  <h2>{copy.contact.h2}</h2>
                  <p style={{ marginTop: "0.5rem", color: "var(--muted)" }}>
                    {copy.contact.lede}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: "1px solid rgba(15,27,44,0.08)",
                    paddingTop: "1.2rem",
                    display: "grid",
                    gap: "0.8rem",
                  }}
                >
                  <p>
                    <strong>{copy.contact.pitch}</strong>
                  </p>
                  <p style={{ fontSize: "0.92rem", color: "var(--muted)" }}>{copy.contact.terms}</p>
                </div>
              </div>

              <div className="about__card reveal" data-delay="0.15s" style={{ alignSelf: "stretch" }}>
                <h3 style={{ textShadow: "none", color: "var(--ink)" }}>{copy.contact.formTitle}</h3>
                <p style={{ textAlign: "center" }}>{copy.contact.formLede}</p>
                <div
                  className="contact__details"
                  style={{
                    color: "var(--ink)",
                    background: "rgba(255,255,255,0.4)",
                    padding: "1.2rem",
                    borderRadius: "15px",
                  }}
                >
                  <span style={{ fontSize: "1.05rem" }}>
                    <i className="fab fa-whatsapp" style={{ color: "#25D366" }}></i>{" "}
                    <strong>{copy.contact.whatsappLabel}:</strong> 0641517831
                  </span>
                  <span style={{ fontSize: "1.05rem", marginTop: "0.5rem" }}>
                    <i className="fas fa-envelope" style={{ color: "var(--ink)" }}></i>{" "}
                    <strong>{copy.contact.emailLabel}:</strong> orders@moroccanorganica.com
                  </span>
                </div>
                <a
                  className="btn btn--primary"
                  href="https://wa.me/212641517831"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: "1rem" }}
                >
                  <i className="fab fa-whatsapp"></i> {copy.contact.whatsappCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="keywords">
          <div className="container">
            <div className="keywords__chips" aria-label={copy.keywordsLabel}>
              {copy.keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <img src="/assets/img/logo.png" alt={copy.footer.logoAlt} />
            <p>{copy.footer.blurb}</p>
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
            <h4>{copy.footer.payment}</h4>
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
                alt={copy.footer.payment}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "0.5rem" }}
              />
            </div>
          </div>
          <div>
            <h4>{copy.footer.logistics}</h4>
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
                alt={copy.footer.logistics}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "0.5rem" }}
              />
            </div>
          </div>
          <div>
            <h4>{copy.footer.contact}</h4>
            <ul className="footer__contact">
              <li>
                <i className="fas fa-map-marker-alt"></i> {copy.footer.address}
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
          <p>
            © 2026 {copy.footer.rights}
          </p>
        </div>
      </footer>

      <button
        id="scrollToTop"
        className={`scroll-to-top ${showScrollTop ? "show" : ""}`}
        aria-label={copy.scrollTop}
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
            aria-label={copy.popup.close}
            onClick={closePopup}
          >
            <i className="fas fa-times"></i>
          </button>
          <span className="bulk-popup__eyebrow">{copy.popup.eyebrow}</span>
          <h3 id="bulkPopupTitle">{copy.popup.title}</h3>
          <p className="bulk-popup__lede">{copy.popup.lede}</p>
          <div className="bulk-popup__media">
            <img src="/assets/img/wholesale-argan-oil.jpg" alt={copy.popup.imageAlt} />
          </div>
          <p className="bulk-popup__body">{copy.popup.body}</p>
          <a
            className="btn btn--primary bulk-popup__cta"
            href="https://wa.me/212641517831"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp"></i> {copy.popup.cta}
          </a>
        </div>
      </div>
    </>
  );
}
