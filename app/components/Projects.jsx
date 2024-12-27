import React from "react"
import Project from "./Project"
import style from "./Projects.module.css"

function Projects() {
  const projects = [
    {
      name: "Form Validation",
      link: "/projects/form/project",
      git: "https://github.com/chinyereunamba/form-validation/",
      stack: [],
    },
    {
      name: "AI Quiz",
      link: "/projects/ai/project",
      git: "https://github.com/chinyereunamba/quiz",
      stack: [],
    },
    {
      name: "Ecommerce",
      link: "/projects/ecommerce/project",
      git: "https://github.com",
      stack: [],
    },
  ];
  return (
    <section className={style.projects} id="portfolio">
      <h1 className="title">My Projects</h1>
      <div className={style.project_list}>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              name={project.name}
              link={project.link}
              stack={project.stack}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
