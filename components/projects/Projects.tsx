import React, { useEffect, useState } from "react";
import Project from "./Project";
import style from "./Projects.module.css";
import { fileUrl, getProject } from "@/services/appwrite";

async function Projects() {
  const projects = await getProject();

  const image = await Promise.all(
    projects!.map(async (item) => {
      return {
        name: item.slug,
        imageUrl: await fileUrl(item.slug),
      };
    })
  );

  return (
    <section className={style.projects} id="portfolio">
      <h1 className="title">My Works</h1>
      <div className={style.project_list}>
        {projects?.map((project, index) => {
          return (
            <Project
              key={index}
              intro={project?.desc}
              name={project?.project_name}
              git={project?.git_link || ""}
              link={project?.slug || ""}
              stack={project?.stack}
              img={image.find(item=>item.name==project.slug)?.imageUrl || ""}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
