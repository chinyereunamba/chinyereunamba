"use client";
import React from "react";
import style from "./About.module.css";
import Image from "next/image";

function About() {
  return (
    <section className={style.about} id="about">
      <h1 className="title">About me</h1>
      <div>
        <div className={style.img}>
          <Image width={500} height={600} src="/img.jpg" alt="Chinyere Unamba" />
        </div>
        <div className={style.about_des}>
          <h1 className={style.name}>
            <b>Chinyere</b> Unamba
          </h1>
          {/* <h3>
            <span>Full Stack Developer</span> <span>Freelancer</span>{" "}
            <span>Tech Enthusiast</span>{" "}
          </h3> */}
          <summary className="text-nt font-normal">
            I am an aspiring full-stack developer with over{" "}
            <strong style={{ color: "var(--secondary-color)" }}>4 years</strong>{" "}
            of hands-on experience in web development technologies. I have
            practical experience with{" "}
            <strong style={{ color: "var(--secondary-color)" }}>
              HTML/CSS
            </strong>
            ,{" "}
            <strong style={{ color: "var(--secondary-color)" }}>Python</strong>,{" "}
            <strong style={{ color: "var(--secondary-color)" }}>Django</strong>,{" "}
            <strong style={{ color: "var(--secondary-color)" }}>
              Django Rest Framework
            </strong>
            ,{" "}
            <strong style={{ color: "var(--secondary-color)" }}>
              React.js
            </strong>
            , and{" "}
            <strong style={{ color: "var(--secondary-color)" }}>Next.js</strong>
            . I am deeply passionate about expanding my skills further and
            exploring innovative projects.
          </summary>
        </div>
      </div>
    </section>
  );
}

export default About;
