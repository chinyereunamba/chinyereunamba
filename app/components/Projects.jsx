import React from "react"
import Project from "./Project"
import style from "./Projects.module.css"

function Projects() {
    return (
        <section className={style.projects} id="portfolio">
            <h1 className="title">My Projects</h1>
            <div className={style.project_list}>
                <Project
                    name={"Ecommerce"}
                    link={"github.com"}
                    stack={["Django", "HTML", "CSS"]}
                    key={0}
                />
                <Project
                    name={"Ecommerce"}
                    link={"github.com"}
                    stack={["Django", "HTML", "CSS"]}
                    key={0}
                />
            </div>
        </section>
    )
}

export default Projects
