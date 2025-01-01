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
      <div>
        <h2>Here&#39;s what I&#39;m Currently Working On</h2>
        <h2>Overarching Goal</h2>
        <p>Improve the quality of the projects on this site.</p>
        <h2>Current To Do&#39;s</h2>
        <p>Learn 2 more core languages. probably python and C#</p>
        <p>Make all Projects Full stack.</p>
        <p>
          Complete some better projects and take off the simple boring ones.
        </p>
        <p>Add photos of projects.</p>
      </div>
    </div>
  );
}

export default Homepage;
