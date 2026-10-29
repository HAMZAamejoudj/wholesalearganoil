import type { Product } from "../lib/products";
import { localePath, type Locale } from "../i18n/config";

interface ProductCardProps {
  product: Product;
  delay?: string;
  chip?: string;
  title?: string;
  summary?: string;
  imageAlt?: string;
  cta?: string;
  href?: string;
  locale?: Locale;
}

export default function ProductCard({
  product,
  delay = "0s",
  chip,
  title,
  summary,
  imageAlt,
  cta = "View details",
  href,
  locale = "en",
}: ProductCardProps) {
  const targetHref = href ?? localePath(locale, `/products/${product.slug}`);
  const cardTitle = title ?? product.cardTitle;

  return (
    <article className="grade-card reveal" data-delay={delay}>
      <a
        href={targetHref}
        className="grade-card__img-link"
        aria-label={cardTitle}
        tabIndex={-1}
      >
        <img src={product.image} alt={imageAlt ?? product.imageAlt} />
      </a>
      <div className="grade-card__body">
        <span className="chip">{chip ?? product.chip}</span>
        <h3>
          <a href={targetHref} className="grade-card__title-link">
            {cardTitle}
          </a>
        </h3>
        <p>{summary ?? product.cardSummary}</p>
        <a
          href={targetHref}
          className="grade-card__cta"
          aria-label={`${cta}: ${cardTitle}`}
        >
          {cta} <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </article>
  );
}
