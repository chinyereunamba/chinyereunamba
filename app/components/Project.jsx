import React from "react"
import style from "./Projects.module.css"
import Link from "next/link"

function Project({ name, stack = [], git, link }) {
    return (
        <div className={style.project}>
            <div className={style.img}>
                <img src="case-1.webp" alt="case-1" />
            </div>
            <div className={style.description}>
                <p className={style.project_title}>{name}</p>
                <span>
                    What I used:{" "}
                    {stack.map((item, index) => (
                        <small className={style.tag} key={index}>
                            {item}
                        </small>
                    ))}
                </span>
                <span>Github: {git}</span>
                <span>
                    <Link href={link}>Preview</Link>
                </span>
            </div>
        </div>
    )
}

export default Project
