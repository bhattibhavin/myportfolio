
import ProjectCard from "./ProjectCard";
import projectData from "../data/projectData";
const Projects = () => {
  return (
    <section className="projects_section autoDisplay" id="projects">
      <div className="container">
        <div className="projects_section_inner">
          <div className="top_section">
            <p className="tagline">PROJECTS</p>
            <h2 className="heading">Projects & Practical Experience</h2>
          </div>

          <div className="bottom_section">
            {projectData.map((project, index)=> (
              <ProjectCard
                key={index}
                tagline={project.tagline}
                heading={project.heading}
                content={project.content}
                tech = {project.tech}
              />
            ))}

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
