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
      {cards.map((card) => {
        const postHref = localePath(locale, `/blog/${card.slug}`);
        return (
          <article key={card.slug} className="blog-card">
            <a
              href={postHref}
              className="blog-card__media-link"
              tabIndex={-1}
              aria-label={card.cardTitle}
            >
              <div className="blog-card__media">
                <img src={card.image} alt={card.imageAlt} />
              </div>
            </a>
            <div className="blog-card__inner">
              <span className="blog-card__tag">{card.tag}</span>
              <h2 className="blog-card__title">
                <a href={postHref} className="blog-card__title-link">
                  {card.cardTitle}
                </a>
              </h2>
              <p className="blog-card__body">{card.cardSummary}</p>
              <a
                href={postHref}
                className="blog-card__cta"
                aria-label={`${cta}: ${card.cardTitle}`}
              >
                {cta} <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
