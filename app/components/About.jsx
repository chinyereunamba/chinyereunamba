"use client"
import React from "react"
import style from "./About.module.css"
import { motion } from "framer-motion"
import Image from "next/image"

function About() {
  return (
    <section className={style.about} id="about">
      <motion.h1
        className="title"
        initial={{ y: "75%", opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          opacity: [0.25, 1],
          transition: { duration: 0.8, ease: "easeIn" },
        }}
      >
        About me
      </motion.h1>
      <div>
        <motion.div
          className={style.img}
          initial={{ translateX: "-50%", opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            translateX: 0,
            opacity: [0, 0.25, 1],
            transition: { duration: 1, delay: 1 },
          }}
        >
          <Image width={600} height={800} src="img.jpg" alt="Chinyere Unamba" />
        </motion.div>
        <motion.div
          className={style.about_des}
          initial={{ translateX: "50%", opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            translateX: 0,
            opacity: [0, 0.25, 1],
            transition: { duration: 1, delay: 1 },
          }}
        >
          <h1 className={style.name}>
            {" "}
            <b>Chinyere</b> Unamba
          </h1>
          <h3>
            <span>Full Stack Developer</span> <span>Freelancer</span>{" "}
            <span>Tech Enthusiast</span>{" "}
          </h3>
          <p>
            I am an aspiring full-stack developer with over{" "}
            <strong style={{ color: "var(--secondary-color)" }}>3 years</strong>{" "}
            of hands-on experience in web development technologies. I have
            practical experience with{" "}
            <strong style={{ color: "var(--secondary-color)" }}>
              HTML/CSS
            </strong>
            ,{" "}
            <strong style={{ color: "var(--secondary-color)" }}>Python</strong>,{" "}
            <strong style={{ color: "var(--secondary-color)" }}>Django</strong>,{" "}
              <strong style={{ color: "var(--secondary-color)" }}>Django Rest Framework</strong>,{" "}
              <strong style={{ color: "var(--secondary-color)" }}>
              React.js
            </strong>
            , and {" "}
            <strong style={{ color: "var(--secondary-color)" }}>Next.js</strong>
            . I am deeply passionate about expanding my skills further and
            exploring innovative projects.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
