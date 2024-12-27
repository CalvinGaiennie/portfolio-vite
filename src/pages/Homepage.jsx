// import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import PageNav from "../components/PageNav";
import ProjectsPreview from "../components/ProjectsPreview";
import Technologies from "../components/Technologies";

function Homepage() {
  return (
    <div>
      <PageNav />
      <Introduction />
      {/* <Experience /> */}
      <ProjectsPreview />
      <Technologies />
      {/* <div>
        <h2>Here&#39;s what I&#39;m Currently Working On</h2>
        <h2>Current To Do&#39;s</h2>
      </div> */}
    </div>
  );
}

export default Homepage;
