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
          title="Order Quality Reporting System"
          description="A full stack application that allows users to report the quality or orders and allows adminstrators to view quality as well as performance of the quality control team over time."
          // images={[
          //   "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/1280px-Kheops-Pyramid.jpg",
          //   "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Christ_the_Redeemer_-_Cristo_Redentor.jpg/1280px-Christ_the_Redeemer_-_Cristo_Redentor.jpg",
          //   "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Taj_Mahal_in_March_2004.jpg/1280px-Taj_Mahal_in_March_2004.jpg",
          //   "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1280px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
          //   "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/The_Treasury_Petra_Jordan_BW_37.jpg/1280px-The_Treasury_Petra_Jordan_BW_37.jpg",
          //   "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Chichen_Itza_3.jpg/1280px-Chichen_Itza_3.jpg",
          //   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg",
          // ]}
          status={"In Progress"}
          hostingStatus={"Not Yet Hosted"}
          techStack={["JavaScript", "CSS", "Node.js", "Express", "MongoDB"]}
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
