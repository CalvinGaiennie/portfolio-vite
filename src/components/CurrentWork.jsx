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
      <p>Build major projects in C# and Python.</p>
      <p>Make all Projects Full stack.</p>
      <p>
        Complete some better projects and take off the simple and boring ones.
      </p>
      <p>Add photos of projects.</p>
      {/* <h2>Overarching Goal</h2>
      <p>
        Improve the quality of the projects on this site and broaden my software
        engineering abilities.
      </p> */}
      <GithubContributions />
    </div>
  );
}

export default CurrentWork;
