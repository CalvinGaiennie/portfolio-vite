import styles from "./Technologies.module.css";
import TechnologyCard from "./TechnologyCard";

function Technologies() {
  return (
    <div>
      <div className={styles.technologies}>
        <h1 className={styles.technologiesHeaderTitle}>Technologies</h1>
        <div className={styles.mainTech}>
          {/* <h3>Main Tech</h3> */}
          {/* <div className={styles.techTable}>
            <div className={styles.techRow}>
              <TechnologyCard name="React" imgSRC="/imgs/react.png" />
              <TechnologyCard name="JavaScript" imgSRC="/imgs/js.webp" />
              <TechnologyCard name="HTML" imgSRC="/imgs/html.webp" />
              <TechnologyCard name="CSS" imgSRC="/imgs/css.png" />
            </div>
            <div className={styles.techRow}>
              <TechnologyCard name="NodeJS" imgSRC="/imgs/nodejs.webp" />
              <TechnologyCard name="MongoDB" imgSRC="/imgs/mongodb.png" />
            </div>
            <div className={styles.techRow}></div>
          </div> */}
          <div className={styles.techTable}>
            <div className={styles.techRow}>
              <TechnologyCard name="React" imgSRC="/imgs/react.png" />
              <TechnologyCard name="JavaScript" imgSRC="/imgs/js.webp" />
              <TechnologyCard name="HTML" imgSRC="/imgs/html.webp" />
              <TechnologyCard name="CSS" imgSRC="/imgs/css.png" />
            </div>
            <div className={styles.techRow}>
              <TechnologyCard name="MS SQL" imgSRC="/imgs/SQLLogo.png" />
              <TechnologyCard
                name="Angular"
                imgSRC="/imgs/angular_gradient.png"
              />
              <TechnologyCard name="MongoDB" imgSRC="/imgs/mongodb.png" />
              <TechnologyCard name="NodeJS" imgSRC="/imgs/nodejs.webp" />
            </div>
            <div className={styles.techRow}>
              <TechnologyCard name="C#" imgSRC="/imgs/CSHARPLOGO.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
