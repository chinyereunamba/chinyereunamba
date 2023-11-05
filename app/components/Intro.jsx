"use client"
import React from "react"
import style from "./Intro.module.css"
import { FaArrowDown } from "react-icons/fa6"
import { motion } from "framer-motion"

function Intro() {
  return (
    <>
      <section className={style.intro} id="home">
        <div>
          <motion.h1
            initial={{ y: "25%", opacity: 0 }}
            animate={{
              y: 0,
              opacity: [0, 0.25, 1],
              transition: { duration: 1, delay: 1 },
            }}
          >
            Hello.
          </motion.h1>
          <motion.h1
            initial={{ y: "25%", opacity: 0 }}
            animate={{
              y: 0,
              opacity: [0, 0.25, 1],
              transition: { duration: 1, delay: 2 },
            }}
          >
            I am Chinyere.
          </motion.h1>
        </div>
      </section>
      <motion.div
        className={style.down}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 , transition:{duration: 1, delay:3}}}
      >
        <motion.button whileTap={{scale: 0.9}}>
          <motion.span
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeIn",
            }}
            initial={{ opacity: [1], translateY: ["-70%"] }}
            animate={{ translateY: ["0%", "60%"], opacity: [1, 0] }}
          >
            <FaArrowDown />
          </motion.span>
        </motion.button>
      </motion.div>
    </>
  )
}

export default Intro
