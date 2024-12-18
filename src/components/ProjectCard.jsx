import styles from "./ProjectCard.module.css";

function ProjectCard({
  title,
  description,
  image,
  link,
  status,
  hostingStatus,
  techStack,
}) {
  return (
    <div className={styles.projectCard}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {image && (
          <img
            src={image}
            alt="Project Image"
            className={styles.projectImage}
          />
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.techStackContainer}>
          {techStack.map((tech) => (
            <p key={tech} className={styles.tech}>
              {tech}
            </p>
          ))}
        </div>
        <div className={styles.statusContainer}>
          <p
            className={`${styles.status} ${
              status === "In Progress" ? styles.inProgress : styles.completed
            }`}
          >
            {status}
          </p>
          <p
            className={`${styles.hostingStatus} ${
              hostingStatus === "Live" ? styles.live : styles.notLive
            }`}
          >
            {hostingStatus}
          </p>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
