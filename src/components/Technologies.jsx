import styles from "./Technologies.module.css";

function Technologies() {
  return (
    <div>
      <div className={styles.technologies}>
        <h1>Technologies</h1>

        <div className={styles.mainTech}>
          {/* <h3>Main Tech</h3> */}
          <div className={styles.flex}>
            <div>
              <img
                src="/imgs/js.webp" // Updated to reference the public folder
                alt="JS logo"
                style={{ width: "30px", height: "auto" }}
              />
              <p>JavaScript</p>
            </div>
            <div>
              <img
                src="/imgs/react.png" // Updated to reference the public folder
                alt="React logo"
                style={{ width: "30px", height: "auto" }}
              />
              <p>React</p>
            </div>
            <div>
              <img
                src="/imgs/html.webp" // Updated to reference the public folder
                alt="HTML logo"
                style={{ width: "30px", height: "auto" }}
              />
              <p>HTML</p>
            </div>
            <div>
              <img
                src="/imgs/css.png" // Updated to reference the public folder
                alt="CSS logo"
                style={{ width: "30px", height: "auto" }}
              />
              <p>CSS</p>
            </div>
            <div>
              <img
                src="/imgs/nodejs.webp" // Updated to reference the public folder
                alt="NodeJS logo"
                style={{ width: "30px", height: "auto" }}
              />
              <p>NodeJS</p>
            </div>
            <div>
              <img
                src="/imgs/mongodb.png" // Updated to reference the public folder
                alt="MongoDB logo"
                style={{ width: "30px", height: "auto" }}
              />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
        {/* <div className={styles.otherTech}>
          <h3>Other Tech</h3>
          <div className={styles.flex}>
            
          </div>
        </div> */}
        {/* <p>
          Maybe sort this by languages, frameworks, backend, databases, etc.
          like 6:39 https://www.youtube.com/watch?v=mL5FM8sktz4 8:35
          https://youtube.com/watch?v=ufmYccZ5E8M
        </p> */}
      </div>
    </div>
  );
}

export default Technologies;
