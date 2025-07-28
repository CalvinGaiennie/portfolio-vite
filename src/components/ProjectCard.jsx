import styles from "./ProjectCard.module.css";
import PhotoScroller from "./PhotoScroller";
function ProjectCard({
  title,
  description,
  images,
  link,
  status,
  hostingStatus,
  techStack,
  todo,
}) {
  return (
    <div className={styles.projectCard}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {images && <PhotoScroller photos={images} />}
        <h3>{title}</h3>
        <p>{description}</p>
        {todo ? (
          <div>
            <p>To Do: {todo}</p>
          </div>
        ) : (
          <></>
        )}

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
        {title !== "This Portfolio" && (
          <div className={styles.linkIndicator}>
            <span>Visit Project →</span>
          </div>
        )}
      </a>
    </div>
  );
}

export default ProjectCard;
