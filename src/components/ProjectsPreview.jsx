import { NavLink } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsPreview.module.css";
function ProjectsPreview() {
  return (
    <div>
      <div className={styles.projectsPreviewHeader}>
        <h1>Featured Projects</h1>
        <NavLink to="/Projects" className={styles.projectsPreviewLink}>
          View More
        </NavLink>
      </div>
      <div className={styles.projectsPreview}>
        <ProjectCard
          title={"Order Quality Reporting System"}
          description={
            "A full stack application that allows users to report the quality or orders and allows adminstrators to view quality as well as performance of the quality control team over time."
          }
          link={"https://cgcheckingreports.netlify.app/"}
          // img={projectImage}
          status={"In Progress"}
          hostingStatus={"Live"}
          techStack={["React", "Bootstrap", "MongoDB", "Node.js", "Express"]}
          todo={"Fix the backend and get it hosted."}
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
      </div>
    </div>
  );
}

export default ProjectsPreview;
