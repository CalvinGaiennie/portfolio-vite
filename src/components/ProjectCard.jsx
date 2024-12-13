import styles from "./ProjectCard.module.css";

function ProjectCard({ title, description, image }) {
  return (
    <div className={styles.projectCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      {/* <img src={projectImage} alt="Project Image" /> */}
    </div>
  );
}

export default ProjectCard;
