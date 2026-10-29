"use client";

import { useEffect, useRef, useState } from "react";
import ContactCta from "../../components/ContactCta";
import ProductCard from "../../components/ProductCard";
import SiteHeader from "../../components/SiteHeader";
import type { Product } from "../../lib/products";
import { en, type Dictionary } from "../../i18n/en";
import { localePath, type Locale } from "../../i18n/config";

interface ProductDetailClientProps {
  product: Product;
  related: Product[];
  locale?: Locale;
  dict?: Dictionary;
}

export default function ProductDetailClient({
  product,
  related,
  locale = "en",
  dict = en,
}: ProductDetailClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const popupTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoCloseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const ui = dict.productDetailUi;
  const footerCopy = dict.home.footer;
  const popupCopy = dict.home.popup;

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
    }, 5000);

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
  }, [product.slug]);

  useEffect(() => {
    if (isPopupVisible) {
      if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = setTimeout(() => {
        setIsPopupVisible(false);
      }, 7000);
    }
  }, [isPopupVisible]);

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
  }, [product.slug]);

  const closePopup = () => {
    setIsPopupVisible(false);
    if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
    if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
  };

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
              <nav className="product-page__breadcrumb" aria-label="Breadcrumb">
                <a href={localePath(locale, "/")}>{ui.home}</a>
                <span>/</span>
                <a href={localePath(locale, "/products")}>{ui.products}</a>
                <span>/</span>
                <span>{product.chip}</span>
              </nav>
              <span className="about-page__eyebrow">{product.chip}</span>
              <h1>{product.h1}</h1>
              <p className="about-page__hero-lede">{product.lede}</p>
              <div className="hero__actions" style={{ marginTop: "1.5rem" }}>
                <a className="btn btn--primary" href="#contact">
                  {ui.requestQuote}
                </a>
                <a className="btn btn--ghost" href={localePath(locale, "/products")}>
                  {ui.allProducts}
                </a>
              </div>
            </div>
            <div className="about-page__hero-media reveal" data-delay="0.1s">
              <img src={product.image} alt={product.imageAlt} />
            </div>
          </div>
        </section>

        <section className="about-page__section">
          <div className="container">
            <div className="about-page__facts reveal" data-delay="0s">
              {product.facts.map((fact) => (
                <div className="about-page__fact" key={fact.label}>
                  <strong>{fact.label}</strong>
                  <span>{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page__section about-page__section--border">
          <div className="container about-page__split">
            <div className="about-page__split-media reveal" data-delay="0.1s">
              <img src={product.overview.image} alt={product.overview.imageAlt} />
            </div>
            <div className="about-page__split-copy reveal" data-delay="0s">
              <span className="about-page__eyebrow">{ui.overview}</span>
              <h2>{product.overview.title}</h2>
              {product.overview.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
              {product.overview.quote ? (
                <p className="about-page__quote">{product.overview.quote}</p>
              ) : null}
            </div>
          </div>
        </section>

        <section className="about-page__section about-page__section--border">
          <div className="container">
            <div className="about-page__intro reveal" data-delay="0s">
              <span className="about-page__eyebrow">{ui.benefits}</span>
              <h2>{product.benefitsTitle}</h2>
              <p>{product.benefitsIntro}</p>
            </div>
            <div className="about-page__list">
              {product.benefits.map((benefit, index) => (
                <article
                  className="about-page__list-item reveal"
                  data-delay={`${index * 0.05}s`}
                  key={benefit.title}
                >
                  <i className="fas fa-check"></i>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page__section about-page__section--border">
          <div className="container about-page__steps">
            <div className="about-page__steps-media reveal" data-delay="0.1s">
              <img src={product.processImage} alt={product.processImageAlt} />
            </div>
            <div className="about-page__steps-copy reveal" data-delay="0s">
              <span className="about-page__eyebrow">{ui.process}</span>
              <h2>{product.processTitle}</h2>
              <p className="product-page__process-intro">{product.processIntro}</p>
              <ol className="about-page__step-list">
                {product.process.map((step) => (
                  <li key={step.title}>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="about-page__section about-page__section--border">
          <div className="container">
            <div className="about-page__intro reveal" data-delay="0s">
              <span className="about-page__eyebrow">{ui.specs}</span>
              <h2>{product.specsTitle}</h2>
            </div>
            <div className="product-page__specs reveal" data-delay="0s">
              {product.specs.map((spec) => (
                <div className="product-page__spec" key={spec.label}>
                  <strong>{spec.label}</strong>
                  <span>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page__section about-page__section--border">
          <div className="container">
            <div className="about-page__intro reveal" data-delay="0s">
              <span className="about-page__eyebrow">{ui.applications}</span>
              <h2>{product.applicationsTitle}</h2>
            </div>
            <div className="about-page__list">
              {product.applications.map((application, index) => (
                <article
                  className="about-page__list-item reveal"
                  data-delay={`${index * 0.05}s`}
                  key={application.title}
                >
                  <i className="fas fa-check"></i>
                  <div>
                    <h3>{application.title}</h3>
                    <p>{application.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page__section about-page__section--border">
          <div className="container">
            <div className="about-page__intro reveal" data-delay="0s">
              <span className="about-page__eyebrow">{ui.faq}</span>
              <h2>{product.faqTitle}</h2>
            </div>
            <div className="product-page__faq">
              {product.faq.map((item) => (
                <article className="product-page__faq-item reveal" data-delay="0s" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page__section about-page__section--border">
          <div className="container">
            <div className="about-page__intro reveal" data-delay="0s">
              <span className="about-page__eyebrow">{ui.relatedTitle}</span>
              <h2>{ui.relatedSubtitle}</h2>
              <p>{ui.relatedDescription}</p>
            </div>
            <div className="product-page__related">
              {related.map((item, index) => (
                <ProductCard
                  key={item.slug}
                  product={item}
                  delay={`${index * 0.08}s`}
                  locale={locale}
                  cta={ui.viewDetails}
                />
              ))}
            </div>
          </div>
        </section>

        <ContactCta
          eyebrow={ui.inquiryEyebrow}
          title={product.ctaTitle}
          description={product.ctaDescription}
          panelTitle={ui.exportDesk}
          responseTime={dict.contactCta.responseTime}
          whatsappCta={dict.contactCta.whatsappCta}
          reveal
        />
      </main>

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
            <h4>{footerCopy.payment}</h4>
            <div style={{ background: "rgba(15, 27, 44, 0.55)", padding: "0.8rem", borderRadius: "1.1rem", border: "1px solid rgba(255, 255, 255, 0.1)", maxWidth: "240px" }}>
              <img src="/assets/img/payment.png" alt={footerCopy.payment} style={{ width: "100%", height: "auto", display: "block", borderRadius: "0.5rem" }} />
            </div>
          </div>
          <div>
            <h4>{footerCopy.logistics}</h4>
            <div style={{ background: "rgba(15, 27, 44, 0.55)", padding: "0.8rem", borderRadius: "1.1rem", border: "1px solid rgba(255, 255, 255, 0.1)", maxWidth: "240px" }}>
              <img src="/assets/img/transport-partner.png" alt={footerCopy.logistics} style={{ width: "100%", height: "auto", display: "block", borderRadius: "0.5rem" }} />
            </div>
          </div>
          <div>
            <h4>{footerCopy.contact}</h4>
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
