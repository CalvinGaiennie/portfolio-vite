import styles from "./Technologies.module.css";
import TechnologyCard from "./TechnologyCard";

function Technologies() {
  return (
    <div>
      <div className={styles.technologies}>
        <h1>Technologies</h1>

        <div className={styles.mainTech}>
          {/* <h3>Main Tech</h3> */}
          <div className={styles.flex}>
            <TechnologyCard name="React" imgSRC="/imgs/react.png" />
            <TechnologyCard name="JavaScript" imgSRC="/imgs/js.webp" />
            <TechnologyCard name="HTML" imgSRC="/imgs/html.webp" />
            <TechnologyCard name="CSS" imgSRC="/imgs/css.png" />
            {/* <TechnologyCard name="NodeJS" imgSRC="/imgs/nodejs.webp" />
             */}
            {/* <TechnologyCard name="MongoDB" imgSRC="/imgs/mongodb.png" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
