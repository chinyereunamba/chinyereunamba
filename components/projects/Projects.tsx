import React from "react";
import Project from "./Project";
import style from "./Projects.module.css";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

async function Projects() {
  const projects = await sanityFetch<SanityDocument[]>({
    query: projectsQuery,
  });

  return (
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
  );
}

export default Projects;
