import PageNav from "../components/PageNav";
import ProjectCard from "../components/ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div>
      <PageNav />
      <h1>Projects</h1>
      <div className={styles.projectsDiv}>
        <ProjectCard
          title={"Data Reporting and Analysis"}
          description={
            "A full stack application that combines the power of tools similar to google forms and excel pivot tables with a powerful admin page to allow for easy data reporting and analysis."
          }
          link={"https://cgcheckingreports.netlify.app/"}
          // img={projectImage}
          status={"In Progress"}
          hostingStatus={"Live"}
          techStack={["React", "Bootstrap", "MongoDB", "Node.js"]}
          todo={
            "Address minor bugs, expand admin capabilites and improve styling."
          }
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
          todo={
            "Currently working on an entire rebuild using typescript .NET Core and SQL Server"
          }
          // img={projectImage}
        />
        {/* <ProjectCard
          title={"CG Games"}
          description={"Some games I am trying to replicate."}
          link={"https://crggames.netlify.app/"}
          // img={projectImage}
          status={"In Progress"}
          hostingStatus={"Live"}
          techStack={["React"]}
        />
        <ProjectCard
          title={"Recipe Sharer V.2"}
          description={
            "An app that allows users to input and store recipes, and then recalculate them based on the number of desired servings. "
          }
          // img={projectImage}
          link={"https://vite-recipes-v2.netlify.app/"}
          status={"In Progress"}
          hostingStatus={"Live"}
          techStack={["React", "Bootstrap", "MongoDB", "Node.js"]}
          todo={
            "Add in some recipes. The ability to login and edit recipes that you wrote and make the frontend prettier."
          }
        /> */}
        <ProjectCard
          title={"This Portfolio"}
          description={
            "This portfolio is a project that I am using to showcase my skills and projects."
          }
          // img={projectImage}
          status={"In Progress"}
          hostingStatus={"Live"}
          techStack={["React"]}
          todo={""}
        />
      </div>
    </div>
  );
}

export default Projects;
Projects;
