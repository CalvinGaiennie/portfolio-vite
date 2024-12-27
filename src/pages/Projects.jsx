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
          title={"Order Quality Reporting System"}
          description={
            "A full stack application that allows users to report the quality or orders and allows adminstrators to view quality as well as performance of the quality control team over time."
          }
          // img={projectImage}
          status={"In Progress"}
          hostingStatus={"Not Yet Hosted"}
          techStack={[
            "JavaScript",
            "HTML",
            "CSS",
            "Node.js",
            "Express",
            "MongoDB",
          ]}
        />
        <ProjectCard
          title={"Music Resources"}
          description={
            "A website containing resources for musicians and some basic lessons for guitar players."
          }
          link={"https://cgmusicv2.netlify.app/"}
          status={"In Progress"}
          hostingStatus={"Live"}
          techStack={["React"]}
          // img={projectImage}
        />

        <ProjectCard
          title={"This Portfolio"}
          description={
            "This portfolio is a project that I am using to showcase my skills and projects."
          }
          // img={projectImage}
          status={"In Progress"}
          hostingStatus={"Live"}
          techStack={["React"]}
        />
        <ProjectCard
          title={"FetchMoreKennels Landing Page"}
          description={"I am building a website for my cousin's buisiness."}
          // img={projectImage}
          status={"In Progress"}
          link={"https://fetchmorekennels.netlify.app/"}
          hostingStatus={"Live"}
          techStack={["React"]}
        />
        <ProjectCard
          title={"Learn Blackjack"}
          description={
            "A simple blackjack game that allows you to see what move perfect strategy would recommend, allowing the user to learn perfect strategy while activly playing the game."
          }
          link={"https://learn-blackjack.netlify.app/"}
          // img={projectImage}
          status={"In Progress"}
          hostingStatus={"Live"}
          techStack={["React"]}
        />
        <ProjectCard
          title={"Recipe Sharer v.1"}
          description={
            "An app that allows users to input and store recipes, and then recalculate them based on the number of desired servings. Next step will be to add backend and allow users to add their own recipes."
          }
          // img={projectImage}
          link={"https://cgrecipes.netlify.app/"}
          status={"Complete"}
          hostingStatus={"Live"}
          techStack={["React"]}
        />
        <ProjectCard
          title={"Music Resources Vanilla JS (Origional Version)"}
          description={
            "A website containing resources for musicians and some basic lessons for guitar players."
          }
          link={"https://cgmusic.netlify.app/"}
          status={"Currently Abandoned"}
          hostingStatus={"Live"}
          techStack={["Javascript", "HTML", "CSS"]}
          // img={projectImage}
        />
      </div>
    </div>
  );
}

export default Projects;
Projects;

{
  /*
  https://cgmusic.netlify.app/
  https://learn-blackjack.netlify.app/
  */
}
