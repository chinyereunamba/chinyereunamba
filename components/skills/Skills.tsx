import React from "react";
import style from "./Skills.module.css";
import Skill from "./Skill";
import {
  DiCss3,
  DiReact,
  DiJavascript,
  DiPython,
  DiHtml5,
} from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { SiDjango, SiTypescript, SiJavascript, SiHtmx } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import Title from "../utils/Title";
function Skills() {
  const skills = [
    { skill: "HTML", icon: <DiHtml5 size={40} /> },
    { skill: "HTMX", icon: <SiHtmx size={40} /> },
    {
      skill: "CSS",
      icon: <DiCss3 size={40} />,
    },
    {
      skill: "TailwindCSS",
      icon: <RiTailwindCssFill size={40} />,
    },
    {
      skill: "JavaScript",
      icon: <SiJavascript size={40} />,
    },
    {
      skill: "TypScript",
      icon: <SiTypescript size={40} />,
    },
    {
      skill: "React JS",
      icon: <DiReact size={40} />,
    },
    {
      skill: "Python",
      icon: <DiPython size={40} />,
    },
    {
      skill: "Django",
      icon: <SiDjango size={40} />,
    },
    // {
    //   skill: "REST Framework",
    //   icon: <Res size={40} />,
    // },
    {
      skill: "APIs",
      icon: <TbApi size={40} />,
    },
  ];
  return (
    <section className={style.skills} id="skills">
      <h1 className="title">My Skills</h1>
      <div className={style.skillList}>
        {skills.map((item, index) => (
          <Skill key={index} icon={item.icon} skill={item.skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
