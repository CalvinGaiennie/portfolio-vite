import { useState } from "react";
import CommitsPage from "./CommitsPage";

function GithubContributions() {
  // const [commitsPageActive, setCommitsPageActive] = useState(false);
  return (
    <div>
      <h2>Recent Github Contributions</h2>
      {/* <button onClick={() => setCommitsPageActive(!commitsPageActive)}>
        {commitsPageActive ? "Hide Commits" : "Show Commits"}
      </button>
      {commitsPageActive && <CommitsPage />} */}
      <CommitsPage />
    </div>
  );
}

//test to see if this will fix the issue of some days not showing their commits
export default GithubContributions;
