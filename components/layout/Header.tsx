"use client";
import Link from "next/link";
import React, { useState } from "react";
import style from "./Header.module.css";
import GradientText from "../utils/GradientText";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const className = isOpen ? style.open : "";
  function clickLink() {
    if (isOpen) {
      setIsOpen(false);
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
      link: "/#blog",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  return (
    <header className={`${style.header} ${className}`}>
      <nav>
        <ul>
          {links.map((el, index) => (
            <li key={index} onClick={clickLink}>
              <Link href={el.link}>{el.name}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <GradientText
            colors={["#40ffaa", "#0ea5e9", "#40ffaa", "#0ea5e9", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            I am open to offers.
          </GradientText>
        </ul>
      </nav>
      <div
        className={style.burger}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;
