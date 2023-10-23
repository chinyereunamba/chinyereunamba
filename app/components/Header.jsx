"use client"
import Link from "next/link"
import React, { useState } from "react"
import style from "./Header.module.css"
import { motion } from "framer-motion"

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const variants = {
    open: { opacity: 1, x: "100%" },
    closed: { opacity: 0, x: "0" },
    initial: { opacity: 0, y: "-100%" },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } },
  }

  return (
    <motion.header
      initial={{ y: "-25%", opacity: 0 }}
      animate={{
        y: 0,
        opacity: [0, 0.25, 1],
        transition: { duration: 1, type: 'spring' },
      }}
      className={style.header}
    >
      <nav>
        <ul>
          <li className={style.active}>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={""}>About</Link>
          </li>
          <li>
            <Link href={""}>Porfolio</Link>
          </li>
          <li>
            <Link href={""}>Blog</Link>
          </li>
          <li>
            <Link href={""}>Contact</Link>
          </li>
        </ul>
        <ul>
          <span>
            I am <b>open to</b> offers.
          </span>
        </ul>
      </nav>
      <div
        className={style.burger}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div></div>
        <div></div>
      </div>
    </motion.header>
  )
}

export default Header
