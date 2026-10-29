"use client";

import { useEffect, useState, useRef } from "react";
import SiteHeader from "../components/SiteHeader";
import ProductCard from "../components/ProductCard";
import ContactCta from "../components/ContactCta";
import { PRODUCTS } from "../lib/products";
import { HTML_LANG, isRtl, localePath, type Locale } from "../i18n/config";
import { en, type Dictionary } from "../i18n/en";

interface ProductsClientProps {
  locale?: Locale;
  dict?: Dictionary;
}

export default function ProductsClient({
  locale = "en",
  dict = en,
}: ProductsClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const copy = dict.products;
  const footerCopy = dict.home.footer;
  const popupCopy = dict.home.popup;
  const ctaCopy = dict.contactCta;

  // Timers for popup
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

  // Popup logic
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

  // Scroll reveal Intersection Observer
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

      <main className="product-page">
        <section className="about-page__hero">
          <div className="container about-page__hero-inner">
            <div className="reveal" data-delay="0s">
              <span className="about-page__eyebrow">{copy.hero.eyebrow}</span>
              <h1>{copy.hero.h1}</h1>
              <p className="about-page__hero-lede">{copy.hero.lede}</p>
              <div className="hero__actions" style={{ marginTop: "1.5rem" }}>
                <a className="btn btn--primary" href="#contact">
                  {copy.hero.primaryCta}
                </a>
                <a className="btn btn--ghost" href={localePath(locale, "/private-label")}>
                  {copy.hero.secondaryCta}
                </a>
              </div>
            </div>
            <div className="about-page__hero-media reveal" data-delay="0.1s">
              <img
                src="/assets/img/wholesale-argan-oil.jpg"
                alt={copy.hero.imageAlt}
              />
            </div>
          </div>
        </section>

        <section className="about-page__section">
          <div className="container">
            <div className="about-page__intro reveal" data-delay="0s">
              <span className="about-page__eyebrow">{copy.intro.eyebrow}</span>
              <h2>{copy.intro.h2}</h2>
              <p>{copy.intro.lede}</p>
            </div>
            <div className="product-page__catalog">
              {PRODUCTS.map((product, index) => {
                const card = dict.home.products.cards[product.slug as keyof typeof dict.home.products.cards];
                return (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    delay={`${index * 0.08}s`}
                    chip={card?.chip}
                    title={card?.title}
                    summary={card?.summary}
                    imageAlt={card?.imageAlt}
                    cta={copy.viewDetails}
                    locale={locale}
                  />
                );
              })}
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
