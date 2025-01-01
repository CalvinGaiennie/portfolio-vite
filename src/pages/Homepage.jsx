// import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import PageNav from "../components/PageNav";
import ProjectsPreview from "../components/ProjectsPreview";
import Technologies from "../components/Technologies";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
function Homepage() {
  return (
    <div>
      <PageNav />
      <Introduction />
      {/* <AboutMe /> */}
      {/* <Experience /> */}
      <ProjectsPreview />
      <Technologies />
    </div>
  );
}

export default Homepage;
