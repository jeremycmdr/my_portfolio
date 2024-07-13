import React from "react";
import projectsData from "../../projectslist";

const Projects = () => {
  return (
    <>
      <div className="content_container">
        <div>
          <h1>Projects</h1>
          <div>
            {projectsData.map((project) => (
              <div key={project.id} className="project">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
