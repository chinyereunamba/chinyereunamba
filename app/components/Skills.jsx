import React from "react"
import style from "./Skills.module.css"

function Skills() {
    return (
        <section className={style.skills}>
            <h1 className="title">My Skills</h1>
            <div className={style.skillList}>
                <div>
                    HTML
                    <i class="devicon-html5-plain"></i>
                </div>
                <div>
                    CSS
                    <i class="devicon-css3-plain-wordmark"></i>
                </div>
                <div>
                    TailwindCSS
                    <i class="devicon-tailwindcss-original-wordmark"></i>
                </div>
                <div>
                    JavaScript
                    <i class="devicon-javascript-plain"></i>
                </div>
                <div>
                    React JS
                    <i class="devicon-react-original"></i>
                </div>
                <div>
                    Next JS
                    <i class="devicon-nextjs-original"></i>
                </div>
                <div>
                    Python
                    <i class="devicon-python-plain"></i>
                </div>
                <div>
                    Django
                    <i class="devicon-django-plain"></i>
                </div>
                <div>Django Rest Framework</div>
            </div>
        </section>
    )
}

export default Skills
