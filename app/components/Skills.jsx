import React from "react"
import style from "./Skills.module.css"
import Skill from "./Skill"

function Skills() {
    const skills = [
        { skill: "HTML", icon: "html5-plain" },
        {
            skill: "CSS",
            icon: "css3-plain-wordmark",
        },
        {
            skill: "TailwindCSS",
            icon: "tailwindcss-plain",
        },
        {
            skill: "JavaScript",
            icon: "javascript-plain",
        },
        {
            skill: "React JS",
            icon: "react-original",
        },
        {
            skill: "Python",
            icon: "python-plain",
        },
        {
            skill: "Django",
            icon: "django-plain",
        },
    ]
    return (
        <section className={style.skills}>
            <h1 className="title">My Skills</h1>
            <div className={style.skillList}>
                {skills.map((item, index) => (
                    <Skill key={index} icon={item.icon} skill={item.skill} />
                ))}
            </div>
        </section>
    )
}

export default Skills
