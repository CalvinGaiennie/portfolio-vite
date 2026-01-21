import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import PageNav from "../components/PageNav";
import styles from "./EssayView.module.css";

// Import essay content
import RealWorldMBA from "../Essays/RealWorldMBA.md?raw";

const essays = {
  "real-world-mba": {
    content: RealWorldMBA,
    title: "My Real World MBA",
    description: "How Tim Ferriss inspired me to quit my job and create my own alternative to graduate school.",
    coverImage: "/imgs/real-world-mba-cover.jpg",
    date: "2024",
  },
};

function EssayView() {
  const { slug } = useParams();
  const essay = essays[slug];

  // Update document title and meta tags
  useEffect(() => {
    if (essay) {
      document.title = `${essay.title} | Calvin Gaiennie`;
      
      // Update OG meta tags
      const updateMeta = (property, content) => {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (meta) meta.setAttribute("content", content);
      };
      
      updateMeta("og:title", essay.title);
      updateMeta("og:description", essay.description);
      updateMeta("og:image", essay.coverImage);
      updateMeta("twitter:title", essay.title);
      updateMeta("twitter:description", essay.description);
      updateMeta("twitter:image", essay.coverImage);
    }
    
    return () => {
      document.title = "Calvin Gaiennie's Portfolio";
    };
  }, [essay]);

  if (!essay) {
    return (
      <div>
        <PageNav />
        <div className={styles.container}>
          <h1>Essay not found</h1>
          <Link to="/essays">← Back to Essays</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageNav />
      <div className={styles.container}>
        <Link to="/essays" className={styles.backLink}>
          ← Back to Essays
        </Link>
        {essay.coverImage && (
          <img 
            src={essay.coverImage} 
            alt={essay.title} 
            className={styles.coverImage} 
          />
        )}
        <article className={styles.article}>
          <ReactMarkdown>{essay.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

export default EssayView;
