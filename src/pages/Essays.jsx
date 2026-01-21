import PageNav from "../components/PageNav";
import EssayCard from "../components/EssayCard";
import styles from "./Projects.module.css";

function Essays() {
  return (
    <div>
      <PageNav />
      <h1>Essays</h1>
      <div className={styles.projectsDiv}>
        <EssayCard
          title="My Real World MBA"
          description="How Tim Ferriss inspired me to quit my job and create my own alternative to graduate school."
          slug="real-world-mba"
          date="2024"
          readTime={6}
          coverImage="/imgs/real-world-mba-cover.jpg"
        />
      </div>
    </div>
  );
}

export default Essays;
