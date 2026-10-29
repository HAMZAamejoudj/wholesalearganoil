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

  return (
    <a href={targetHref} className="grade-card-link">
      <article className="grade-card reveal" data-delay={delay}>
        <img src={product.image} alt={imageAlt ?? product.imageAlt} />
        <div className="grade-card__body">
          <span className="chip">{chip ?? product.chip}</span>
          <h3>{title ?? product.cardTitle}</h3>
          <p>{summary ?? product.cardSummary}</p>
          <span className="grade-card__cta">
            {cta} <i className="fas fa-arrow-right"></i>
          </span>
        </div>
      </article>
    </a>
  );
}
