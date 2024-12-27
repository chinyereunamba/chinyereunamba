"use client"
import Link from "next/link"
import React, { useState } from "react"
import style from "./Header.module.css"
import { motion } from "framer-motion"

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const className = isOpen ? style.open : ""
  function clickLink() {
    if (isOpen) {
      setIsOpen(false)
    }
  }
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Portfolio",
      link: "/#portfolio",
    },
    {
      name: "Blog",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];

  return (
    <motion.header
      initial={{ y: "-25%", opacity: 0 }}
      viewport={{once: true}}
      animate={{
        y: 0,
        opacity: [0, 0.25, 1],
        transition: { duration: 1, type: "spring" },
      }}
      className={`${style.header} ${className}`}
    >
      <nav>
        <ul>
          {links.map((el, index) => (
            <li key={index} onClick={clickLink}>
              <Link href={el.link}>{el.name}</Link>
            </li>
          ))}
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
