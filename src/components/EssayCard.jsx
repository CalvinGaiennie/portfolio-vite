import { Link } from "react-router-dom";
import styles from "./EssayCard.module.css";

function EssayCard({ title, description, slug, date, readTime, coverImage }) {
  return (
    <div className={styles.essayCard}>
      <Link to={`/essays/${slug}`}>
        {coverImage && (
          <img src={coverImage} alt={title} className={styles.coverImage} />
        )}
        <div className={styles.content}>
          <h3>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.metaContainer}>
            {date && <span className={styles.date}>{date}</span>}
            {readTime && <span className={styles.readTime}>{readTime} min read</span>}
          </div>
          <div className={styles.linkIndicator}>
            <span>Read Essay →</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EssayCard;
