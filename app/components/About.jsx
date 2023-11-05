"use client"
import React from "react"
import style from "./About.module.css"
import {motion } from "framer-motion"

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
          <img src="img.jpg" alt="" />
        </motion.div>
        <motion.div
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            praesentium suscipit blanditiis temporibus quidem a esse magni
            soluta, ducimus quisquam eius assumenda provident quia perspiciatis
            modi ea? Veniam, ab dolor?
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
