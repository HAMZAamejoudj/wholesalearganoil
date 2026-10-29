import type { BlogPost } from "../lib/blog-posts";
import { localePath, type Locale } from "../i18n/config";

interface BlogCardGridProps {
  cards: BlogPost[];
  locale?: Locale;
  cta?: string;
}

export default function BlogCardGrid({
  cards,
  locale = "en",
  cta = "Read article",
}: BlogCardGridProps) {
  return (
    <div className="blog-page__cards-grid">
      {cards.map((card) => (
        <a
          key={card.slug}
          href={localePath(locale, `/blog/${card.slug}`)}
          className="blog-card-link"
        >
          <article className="blog-card">
            <div className="blog-card__media">
              <img src={card.image} alt={card.imageAlt} />
            </div>
            <div className="blog-card__inner">
              <span className="blog-card__tag">{card.tag}</span>
              <h2 className="blog-card__title">{card.cardTitle}</h2>
              <p className="blog-card__body">{card.cardSummary}</p>
              <span className="blog-card__cta">
                {cta} <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}
