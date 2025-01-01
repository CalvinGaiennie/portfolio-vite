import { useState } from "react";
import CommitsPage from "./CommitsPage";

function GithubContributions() {
  const [commitsPageActive, setCommitsPageActive] = useState(false);
  return (
    <div>
      <h2>Github Contributions</h2>
      <button onClick={() => setCommitsPageActive(!commitsPageActive)}>
        {commitsPageActive ? "Hide Commits" : "Show Commits"}
      </button>
      {commitsPageActive && <CommitsPage />}
    </div>
  );
}

export default GithubContributions;
