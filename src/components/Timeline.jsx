import styles from "./Timeline.module.css";

function Timeline({ title, content }) {
  return (
    <div className={styles.timeline}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default Timeline;
