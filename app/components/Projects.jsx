import React from "react"
import Project from "./Project"
import style from "./Projects.module.css"

function Projects() {
  const projects = [
    {
      name: "Form Validation",
      link: "https://form-verification.netlify.app/",
      git: "https://github.com/chinyereunamba/form-validation/",
      stack: [],
    },
    {
      name: "AI Quiz",
      link: "https://quiz-app-eta-roan.vercel.app/",
      git: "https://github.com/chinyereunamba/quiz",
      stack: [],
    },
    {
      name: "Ecommerce",
      link: "https://github.com",
      git: "https://github.com",
      stack: [],
    },
  ]
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
