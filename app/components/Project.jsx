import React from "react"
import style from "./Projects.module.css"
import Link from "next/link"
import { FaGithub } from "react-icons/fa6"
import { GoLinkExternal } from "react-icons/go"
function Project({ name, stack = [], git, link }) {
  return (
    <div className={style.project}>
      <div className={style.img}>
        <iframe
          src={link}
          height="100%"
          allowfullscreen
        ></iframe>
      </div>
      <div className={style.description}>
        <p className={style.project_title}>{name}</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          tempore?
        </p>
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
            <Link href={"/"}>
              <FaGithub />
            </Link>
            <Link className={style.preview} href={"/"}>
              <GoLinkExternal />
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Project
