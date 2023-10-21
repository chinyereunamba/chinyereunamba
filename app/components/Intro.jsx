import React from "react"
import style from "./Intro.module.css"
import { FaArrowDown } from "react-icons/fa6"
import { motion } from "framer-motion"

function Intro() {
    return (
        <>
            <section className={style.intro} id="home">
                <motion.div
                    
                >
                    <h1>Hello.</h1>
                    <h1>I am Chinyere.</h1>
                </motion.div>
            </section>
            <div className={style.down}>
                <button>
                    <FaArrowDown />
                </button>
            </div>
        </>
    )
}

export default Intro
