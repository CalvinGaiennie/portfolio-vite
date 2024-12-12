function ProjectCard({ title, description, image }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {/* <img src={projectImage} alt="Project Image" /> */}
    </div>
  );
}

export default ProjectCard;
