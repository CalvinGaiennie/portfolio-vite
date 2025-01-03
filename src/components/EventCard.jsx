import styles from "./EventCard.module.css";
function EventCard({ position, institution, location, time, logo }) {
  return (
    <div className={styles.eventCard}>
      <img src={logo} className={styles.eventLogo} />
      <div className={styles.eventCardText}>
        <p>{time}</p>
        <h3>{institution}</h3>
        <p>{position}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default EventCard;
