import React from "react";

const Projects = () => {
  const projectsData = [
    {
      id: 1,

      title: "How to cancel Axios request?",
      description: "This is a small project I worked on.",
      link: "https://github.com/jeremycmdr/axios-cancel-test",
    },
    {
      id: 2,
      title: "Portfolio",
      description: "This is my personal portfolio website.",
      link: "https://github.com/jeremycmdr/my_portfolio",
    },
  ];
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
