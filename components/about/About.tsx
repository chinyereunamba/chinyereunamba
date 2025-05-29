// "use client";
import React from "react";
import style from "./About.module.css";
import Image from "next/image";
import AnimatedContent from "../utils/Animate";

function About() {
  return (
    <AnimatedContent
      distance={150}
      direction="horizontal"
      reverse={false}
      config={{ tension: 80, friction: 20 }}
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
    >
      <section className={style.about} id="about">
        <h1 className="title">About me</h1>
        <div>
          {/* <div className={style.img}>
          <Image width={500} height={600} src="/img.jpg" alt="Chinyere Unamba" />
        </div> */}
          <div className={style.about_des}>
            {/* <h1 className={style.name}>
            <b>Chinyere</b> Unamba
          </h1> */}
            {/* <h3>
            <span>Full Stack Developer</span> <span>Freelancer</span>{" "}
            <span>Tech Enthusiast</span>{" "}
          </h3> */}
            <summary className="font-normal">
              I am an aspiring full-stack developer with over{" "}
              <strong>4 years</strong> of hands-on
              experience in web development technologies. I have practical
              experience with{" "}
              <strong>HTML/CSS</strong>,{" "}
              <strong>Python</strong>,{" "}
              <strong>Django</strong>,{" "}
              <strong>Django Rest Framework</strong>,{" "}
              <strong>React.js</strong>, and{" "}
              <strong>Next.js</strong>. I am deeply
              passionate about expanding my skills further and exploring
              innovative projects.
            </summary>
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
}

export default About;
