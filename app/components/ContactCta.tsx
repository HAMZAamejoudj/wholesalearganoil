interface ContactCtaProps {
  eyebrow: string;
  title: string;
  description: string;
  panelTitle: string;
  responseTime?: string;
  whatsappCta?: string;
  border?: boolean;
  reveal?: boolean;
}

export default function ContactCta({
  eyebrow,
  title,
  description,
  panelTitle,
  responseTime = "Response within 24 hours on business days.",
  whatsappCta = "Message on WhatsApp",
  border = false,
  reveal = false,
}: ContactCtaProps) {
  return (
    <section
      id="contact"
      className={`contact-cta${border ? " contact-cta--border" : ""}`}
    >
      <div className="container">
        <div
          className={`contact-cta__grid${reveal ? " reveal" : ""}`}
          data-delay={reveal ? "0s" : undefined}
        >
          <div className="contact-cta__copy">
            <span className="contact-cta__eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="contact-cta__panel">
            <h3>{panelTitle}</h3>
            <p className="contact-cta__panel-note">{responseTime}</p>
            <div className="contact-cta__links">
              <a
                href="https://wa.me/212641517831"
                className="contact-cta__link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp"></i> 0641517831
              </a>
              <a
                href="mailto:orders@moroccanorganica.com"
                className="contact-cta__link"
              >
                <i className="fas fa-envelope"></i> orders@moroccanorganica.com
              </a>
            </div>
            <a
              className="btn btn--primary"
              href="https://wa.me/212641517831"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i> {whatsappCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
