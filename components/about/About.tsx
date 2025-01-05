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
              <strong className="text-secondary">4 years</strong> of hands-on
              experience in web development technologies. I have practical
              experience with{" "}
              <strong className="text-secondary">HTML/CSS</strong>,{" "}
              <strong className="text-secondary">Python</strong>,{" "}
              <strong className="text-secondary">Django</strong>,{" "}
              <strong className="text-secondary">Django Rest Framework</strong>,{" "}
              <strong className="text-secondary">React.js</strong>, and{" "}
              <strong className="text-secondary">Next.js</strong>. I am deeply
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
