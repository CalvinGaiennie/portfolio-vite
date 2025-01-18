import GithubContributions from "./GithubContributions";

function CurrentWork() {
  return (
    <div>
      <h1>Current Work</h1>
      {/* <h2>Here&#39;s what I&#39;m Currently Working On</h2>
      <p>
        I am working as a full time software development intern and working on
        projects in my free time.
      </p> */}
      <h2>To Do&#39;s</h2>
      <p>
        Add backend to existing projects. Complete projects in other core
        languages and take off the simple and boring ones.
      </p>
      <p>Add photos of projects.</p>
      <p>Replace Intro Photo</p>
      {/* <div>
        <h2>Projects I want here</h2>
        <p>A few advanced React Projects (semi done)</p>
        <p>An AI Project</p>
        <p>An couple angular projects</p>
        <p>multiple interesting full stack projects</p>
        <p>C# projects</p>
        <p>Python Projects</p>
      </div> */}
      <div>
        <h2>Projects I want Here</h2>
        <p>Music App</p>
        <p>Games App</p>
        <p>Order checking App</p>
        <p>At least one Angular Project</p>
        <p>At least one tensor Flow Project</p>
        <p>At least one C# project</p>
        <p>Maybe a python project</p>
      </div>
      <div>
        <h2>Project Specifics</h2>
        <p>
          When i add backend to the music app I want to allow users to add and
          delete their own custom scales and chords but not to be able to delete
          anything from the main database. I also want to allow them to add
          their own songs to the ear trainer but only be able to delete songs
          they add not the standard ones or ones other people submit
        </p>
      </div>
      <GithubContributions />
    </div>
  );
}

export default CurrentWork;
