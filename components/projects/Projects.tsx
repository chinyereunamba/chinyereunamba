import React from "react";
import Project from "./Project";
import style from "./Projects.module.css";
import { SanityDocument } from "next-sanity";
import AnimatedContent from "../utils/Animate";

function Projects({projects}: {projects: SanityDocument[]}) {
 

  return (
    <AnimatedContent
      distance={150}
      direction="horizontal"
      reverse={false}
      config={{ tension: 80, friction: 20 }}
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
    >
      <section className={style.projects} id="portfolio">
        <h1 className="title">My Works</h1>
        <div className={style.project_list}>
          {projects?.map((project, index) => {
            return (
              <Project
                key={index}
                intro={project.description ?? ""}
                name={project.title ?? ""}
                git={project.github ?? ""}
                link={project.slug?.current ?? ""}
                stack={project?.tags ?? []}
                img={project.mainImage?.asset?.url ?? ""}
                alt={project.mainImage?.alt ?? project.title}
              />
            );
          })}
        </div>
      </section>
    </AnimatedContent>
  );
}

export default Projects;
