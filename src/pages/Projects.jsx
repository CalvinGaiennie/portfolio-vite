import PageNav from "../components/PageNav";
import ProjectCard from "../components/ProjectCard";
import styles from "../components/ProjectCard.module.css";

function Projects() {
  return (
    <div>
      <PageNav />
      <h1>Projects</h1>
      <div className={styles.projectsPreview}>
        <ProjectCard
          title="Order Quality Reporting System"
          description="A full stack application that allows users to report the quality or orders and allows adminstrators to view quality as well as performance of the quality control team over time."
          // img={projectImage}
        />
        <ProjectCard
          title="Music Resources"
          description="A website containing resources for musicians and some basic lessons for guitar players."
          // img={projectImage}
        />

        <ProjectCard
          title="Recipe Sharer"
          description="An app that allows users to input and store recipes, and then recalculate them based on the number of desired servings."
          // img={projectImage}
        />
        <ProjectCard
          title="Learn Blackjack"
          description="A simple blackjack game that allows you to see what move perfect strategy would recommend, allowing the user to learn perfect strategy while activly playing the game."
          // img={projectImage}
        />
      </div>
    </div>
  );
}

export default Projects;
Projects;
