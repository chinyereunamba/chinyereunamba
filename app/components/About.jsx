import React from "react"
import style from './About.module.css'

function About() {
    return (
        <section className={style.about} id="about">
            <h1 className="title">About me</h1>
            <div>
            <div className={style.img}>
                <img src="img.jpg" alt="" />
            </div>
            <div>
                <h1 className={style.name}>Chinyere Unamba</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Incidunt praesentium suscipit blanditiis temporibus quidem a
                    esse magni soluta, ducimus quisquam eius assumenda provident
                    quia perspiciatis modi ea? Veniam, ab dolor?
                </p>
            </div>

            </div>
        </section>
    )
}

export default About
