"use client";

import { useEffect, useRef, useState } from "react";
import ContactCta from "../../components/ContactCta";
import SiteHeader from "../../components/SiteHeader";
import type { BlogPost } from "../../lib/blog-posts";
import BlogCardGrid from "../BlogCardGrid";
import { en, type Dictionary } from "../../i18n/en";
import { localePath, type Locale } from "../../i18n/config";

interface BlogPostClientProps {
  post: BlogPost;
  related: BlogPost[];
  locale?: Locale;
  dict?: Dictionary;
}

export default function BlogPostClient({
  post,
  related,
  locale = "en",
  dict = en,
}: BlogPostClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const popupTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoCloseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const ui = dict.blogPostUi;
  const productUi = dict.productDetailUi;
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
  }, [post.slug]);

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
  }, [post.slug]);

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
                <a href={localePath(locale, "/blog")}>{ui.blog}</a>
                <span>/</span>
                <span>{post.tag}</span>
              </nav>
              <span className="about-page__eyebrow">{post.tag}</span>
              <h1>{post.h1}</h1>
              <p className="about-page__hero-lede">{post.lede}</p>
              <div className="hero__actions" style={{ marginTop: "1.5rem" }}>
                <a className="btn btn--primary" href="#contact">
                  {ui.talkToExport}
                </a>
                <a className="btn btn--ghost" href={localePath(locale, "/blog")}>
                  {ui.allArticles}
                </a>
              </div>
            </div>
            <div className="about-page__hero-media reveal" data-delay="0.1s">
              <img src={post.image} alt={post.imageAlt} />
            </div>
          </div>
        </section>

        {post.sections.map((section, index) => (
          <section
            className={`about-page__section${index === 0 ? "" : " about-page__section--border"}`}
            key={section.title}
          >
            <div className="container about-page__split">
              {index === 0 ? (
                <div className="about-page__split-media reveal" data-delay="0.1s">
                  <img src={post.image} alt={post.imageAlt} />
                </div>
              ) : null}
              <div
                className="about-page__split-copy reveal"
                data-delay="0s"
                style={index === 0 ? undefined : { gridColumn: "1 / -1", maxWidth: "760px" }}
              >
                <span className="about-page__eyebrow">
                  {index === 0 ? ui.guide : ui.details}
                </span>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
                {section.quote ? <p className="about-page__quote">{section.quote}</p> : null}
              </div>
            </div>
          </section>
        ))}

        <section className="about-page__section about-page__section--border">
          <div className="container">
            <div className="about-page__intro reveal" data-delay="0s">
              <span className="about-page__eyebrow">{ui.keyPoints}</span>
              <h2>{post.pointsTitle}</h2>
            </div>
            <div className="about-page__list">
              {post.points.map((point, index) => (
                <article
                  className="about-page__list-item reveal"
                  data-delay={`${index * 0.05}s`}
                  key={point.title}
                >
                  <i className="fas fa-check"></i>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
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
              <h2>{post.faqTitle}</h2>
            </div>
            <div className="product-page__faq">
              {post.faq.map((item) => (
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
              <span className="about-page__eyebrow">{ui.relatedGuides}</span>
              <h2>Related argan oil guides</h2>
            </div>
            <BlogCardGrid cards={related} locale={locale} cta={dict.blog.readArticle} />
          </div>
        </section>

        <ContactCta
          eyebrow={productUi.exportDesk}
          title={post.ctaTitle}
          description={post.ctaDescription}
          panelTitle={productUi.exportDesk}
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
