// import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import PageNav from "../components/PageNav";
import ProjectsPreview from "../components/ProjectsPreview";
import Technologies from "../components/Technologies";
import Experience from "../components/Experience";
function Homepage() {
  return (
    <div>
      <PageNav />
      <Introduction />
      {/* <Experience /> */}
      <ProjectsPreview />
      <Technologies />
    </div>
  );
}

export default Homepage;
