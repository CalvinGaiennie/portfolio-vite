import styles from "./TechnologyCard.module.css";

function TechnologyCard({ imgSRC, name }) {
  return (
    <div className={styles.TechnologyCard}>
      <img src={imgSRC} alt={name} style={{ width: "30px", height: "auto" }} />
      <p>{name}</p>
    </div>
  );
}

export default TechnologyCard;
