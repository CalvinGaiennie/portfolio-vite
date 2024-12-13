import styles from "./Timeline.module.css";

function Timeline({ title, content }) {
  return (
    <div className={styles.timeline}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Timeline;
