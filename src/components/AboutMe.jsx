import { useState } from "react";
import GithubContributions from "./GithubContributions";

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <div>
        <h2>Here&#39;s what I&#39;m Currently Working On</h2>
        <h2>Overarching Goal</h2>
        <p>
          Improve the quality of the projects on this site and broaden my
          software engineering abilities.
        </p>
        <h2>Current To Do&#39;s</h2>
        <p>Learn 2 more core languages. probably python and C#</p>
        <p>Make all Projects Full stack.</p>
        <p>
          Complete some better projects and take off the simple boring ones.
        </p>
        <p>Add photos of projects.</p>
      </div>
      <GithubContributions />
    </div>
  );
}

export default AboutMe;
