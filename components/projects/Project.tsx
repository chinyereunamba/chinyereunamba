import React from "react";
import style from "./Projects.module.css";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import Image from "next/image";

type ProjectProps = {
  intro: string;
  name: string;
  stack: string[];
  git: string;
  link: string;
  img: string
};

function Project({ intro, name, stack = [], git, link, img }: ProjectProps) {
  return (
    <div className={style.project}>
      <div className={style.img}>
        <Image src={img} height={500} width={500} alt={ name } />
      </div>
      <div className={style.description}>
        <p className={style.project_title}>{name}</p>
        <p>{intro}</p>
        <div className={style.link}>
          <span>
            <p>Stack: </p>
            {stack.map((item, index) => (
              <small className={style.tag} key={index}>
                {item}
              </small>
            ))}
          </span>
          <span className={style.project_link}>
            <Link href={git} target="_blank">
              <FaGithub />
            </Link>
            <Link className={style.preview} href={`/projects/${link}`} target="_blank">
              <GoLinkExternal />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Project;
