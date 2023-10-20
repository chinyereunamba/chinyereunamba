import React from 'react'
import style from './Skills.module.css'

function Skill({skill, icon}) {
  return (
      <div className={style.skill}>
          <div>
              <i className={`devicon-${icon}`}></i>
          </div>
          <span>{skill}</span>
      </div>
  )
}

export default Skill