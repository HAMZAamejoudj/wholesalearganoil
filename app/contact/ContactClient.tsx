"use client";

import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";
import BulkPopup from "../components/BulkPopup";
import "./contact.css";
import { HTML_LANG, isRtl, type Locale } from "../i18n/config";
import { en, type Dictionary } from "../i18n/en";

interface ContactClientProps {
  locale?: Locale;
  dict?: Dictionary;
}

export default function ContactClient({
  locale = "en",
  dict = en,
}: ContactClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const copy = dict.contact;
  const footerCopy = dict.home.footer;
  const popupCopy = dict.home.popup;

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    interest: "Bulk Raw Oil",
    quantity: "5L - 25L",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        country: "",
        interest: "Bulk Raw Oil",
        quantity: "5L - 25L",
        message: "",
      });
    }, 1200);
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

      <main className="contact-page">
        {/* Contact Hero */}
        <section className="contact-page__hero">
          <div className="container contact-page__hero-content">
            <span className="benefits-page__eyebrow">{copy.hero.eyebrow}</span>
            <h1>{copy.hero.h1}</h1>
            <p className="contact-page__hero-lede">{copy.hero.lede}</p>
          </div>
        </section>

        {/* Content Grid */}
        <section className="contact-page__content-wrap">
          <div className="container contact-page__grid">
            {/* Left Column: Form */}
            <div>
              <div className="contact-form__card">
                <h2>{copy.form.title}</h2>
                <p>{copy.form.lede}</p>

                {isSubmitted && (
                  <div className="contact-form__success-msg">
                    <i className="fas fa-check-circle"></i>
                    <div>
                      <strong>{copy.form.successTitle}</strong>
                      <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.9rem", color: "#2b7048" }}>
                        {copy.form.successBody}
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="contact-form__group">
                      <label htmlFor="name">{copy.form.nameLabel}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="contact-form__input"
                        placeholder={copy.form.namePlaceholder}
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="contact-form__group">
                      <label htmlFor="email">{copy.form.emailLabel}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="contact-form__input"
                        placeholder={copy.form.emailPlaceholder}
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__group">
                      <label htmlFor="company">{copy.form.companyLabel}</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="contact-form__input"
                        placeholder={copy.form.companyPlaceholder}
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="contact-form__group">
                      <label htmlFor="country">{copy.form.countryLabel}</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        className="contact-form__input"
                        placeholder={copy.form.countryPlaceholder}
                        value={formData.country}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__group">
                      <label htmlFor="interest">{copy.form.interestLabel}</label>
                      <select
                        id="interest"
                        name="interest"
                        className="contact-form__select"
                        value={formData.interest}
                        onChange={handleChange}
                      >
                        <option value="Bulk Raw Oil">{copy.form.interestOptions.bulk}</option>
                        <option value="Private Label">{copy.form.interestOptions.privateLabel}</option>
                        <option value="Custom Formulation">{copy.form.interestOptions.formulation}</option>
                        <option value="Samples">{copy.form.interestOptions.samples}</option>
                      </select>
                    </div>
                    <div className="contact-form__group">
                      <label htmlFor="quantity">{copy.form.quantityLabel}</label>
                      <select
                        id="quantity"
                        name="quantity"
                        className="contact-form__select"
                        value={formData.quantity}
                        onChange={handleChange}
                      >
                        <option value="Samples Only">{copy.form.quantityOptions.samples}</option>
                        <option value="5L - 25L">{copy.form.quantityOptions.q5_25}</option>
                        <option value="25L - 200L">{copy.form.quantityOptions.q25_200}</option>
                        <option value="200L - 1000L">{copy.form.quantityOptions.q200_1000}</option>
                        <option value="1000L+">{copy.form.quantityOptions.q1000}</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="message">{copy.form.messageLabel}</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="contact-form__textarea"
                      placeholder={copy.form.messagePlaceholder}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="contact-form__submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i> {copy.form.submittingButton}
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i> {copy.form.submitButton}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Information & Direct Contacts */}
            <div className="contact-info__wrap">
              <div className="contact-info__card">
                <h3>{copy.info.title}</h3>
                <p>{copy.info.lede}</p>

                <div className="contact-info__items">
                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div>
                      <strong>{copy.info.whatsappLabel}</strong>
                      <p>
                        <a
                          href="https://wa.me/212641517831"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#25D366", fontWeight: "700" }}
                        >
                          +212 641 517 831
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <strong>{copy.info.emailLabel}</strong>
                      <p>
                        <a href="mailto:orders@moroccanorganica.com">orders@moroccanorganica.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <strong>{copy.info.locationLabel}</strong>
                      <p>{copy.info.locationValue}</p>
                    </div>
                  </div>

                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <strong>{copy.info.hoursLabel}</strong>
                      <p>{copy.info.hoursValue}</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <a
                    href="https://wa.me/212641517831"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <i className="fab fa-whatsapp"></i> {copy.info.whatsappCta}
                  </a>
                </div>
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

      {/* Floating Scroll to Top */}
      <button
        id="scrollToTop"
        className={`scroll-to-top ${showScrollTop ? "show" : ""}`}
        aria-label={dict.home.scrollTop}
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* Bulk Program Popup */}
      <BulkPopup popupCopy={popupCopy} />
    </>
  );
}
