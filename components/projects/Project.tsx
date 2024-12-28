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
  git?: string;
  link: string;
  img: string;
  alt: string;
};

function Project({
  intro,
  name,
  stack = [],
  git,
  link,
  img,
  alt,
}: ProjectProps) {
  return (
    <div className={style.project}>
      {/* <div className={style.img}> */}
      <div className="mockup-browser bg-base-300 !w-2/3">
        <div className="mockup-browser-toolbar">
          <div className="input">https://mediaplur.com</div>
        </div>

        <Image
          src={img}
          height={300}
          width={900}
          alt={alt}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* </div> */}
      <div className={style.description}>
        <p className={`${style.project_title} nt`}>
          <Link href={`/projects/${link}`}>{name}</Link>
        </p>
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
            {git && (
              <Link href={git} target="_blank">
                <FaGithub />
              </Link>
            )}

            <Link className={style.preview} href={`/projects/${link}`}>
              <GoLinkExternal />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Project;
