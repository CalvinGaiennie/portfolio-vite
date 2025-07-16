import { NavLink } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsPreview.module.css";
function ProjectsPreview() {
  return (
    <div>
      <div className={styles.projectsPreviewHeader}>
        <h1 className={styles.projectsPreviewHeaderTitle}>Featured Projects</h1>
        <NavLink to="/Projects" className={styles.projectsPreviewLink}>
          View More
        </NavLink>
      </div>
      <div className={styles.projectsPreview}>
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
          link={"https://cgmusic.netlify.app/"}
          status={"In Progress"}
          hostingStatus={"Live"}
          techStack={["React"]}
          // img={projectImage}
        />
      </div>
    </div>
  );
}

export default ProjectsPreview;
