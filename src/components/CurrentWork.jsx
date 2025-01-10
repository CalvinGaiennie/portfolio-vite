import GithubContributions from "./GithubContributions";

function CurrentWork() {
  return (
    <div>
      <h1>Current Work</h1>
      <h2>Here&#39;s what I&#39;m Currently Working On</h2>
      <p>
        Doing a{" "}
        <a
          href="https://www.udemy.com/course/master-neural-networks-build-with-javascript-and-react/?couponCode=NEWYEARCAREER"
          target="_blank"
        >
          Udemy Course
        </a>{" "}
        on Neural Networks.
      </p>
      <p>
        When I finish the course I am planning to build a similar project on my
        own and include it here.
      </p>
      <h2>Other To Do&#39;s</h2>
      <p>
        Complete some full stack projects in other core languages and take off
        the simple and boring ones.
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
        <h2>project specifics</h2>
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
