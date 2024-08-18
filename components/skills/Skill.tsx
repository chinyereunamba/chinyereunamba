import React from "react";
import style from "./Skills.module.css";

type SkillProps = {
  skill: string;
  icon: React.JSX.Element;
};

function Skill({ skill, icon }: SkillProps) {
  return (
    <div className={style.skill}>
      <div>{icon}</div>
      <span>{skill}</span>
    </div>
  );
}

export default Skill;
