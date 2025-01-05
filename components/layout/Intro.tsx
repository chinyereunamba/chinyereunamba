"use client";
import React from "react";
import style from "./Intro.module.css";
import { FaArrowDown } from "react-icons/fa6";
import SplitText from "../utils/SplitText";

function Intro() {
  return (
    <>
      <section className={style.intro} id="home">
        <div>
          <h1>
            <SplitText
              text="Hello."
              className={style.splitText}
            />
          </h1>
          <h1>
            <SplitText text="I'm Chinyere." className={style.splitText} />
          </h1>
        </div>
      </section>
      <div className={style.down}>
        <button>
          <span>
            <FaArrowDown />
          </span>
        </button>
      </div>
    </>
  );
}

export default Intro;
