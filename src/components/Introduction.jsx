import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <div>
      <div className="introduction">
        <h1>Introduction</h1>
        <p>Calvin Gaiennie. Software Developer. Lafayette Louisiana</p>
        <div className={styles.links}>
          <a
            href="/CalvinGaiennie_Resume_11-24-24.pdf" // Updated to reference the public folder
            download="CalvinGaiennie_Resume_11-24-24.pdf"
            className={styles.resume}
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-down ml-2 size-5"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M12 18v-6" />
              <path d="m9 15 3 3 3-3" />
            </svg>
          </a>

          <a
            href="https://github.com/CalvinGaiennie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/imgs/github.png" // Updated to reference the public folder
              alt="GitHub logo"
              style={{ width: "30px", height: "auto" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/calvin-gaiennie-611996317/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/imgs/linkedin.png" // Updated to reference the public folder
              alt="LinkedIn logo"
              style={{ width: "30px", height: "auto" }}
            />
          </a>
        </div>
        <p>Contact Me: Calvingaiennie@gmail.com</p>
      </div>
    </div>
  );
}

export default Introduction;
