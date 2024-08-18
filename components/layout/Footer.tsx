import React from "react";
import style from "./Footer.module.css";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <section className={style.footer}>
      <div className={style.social}>
        <Link href={"https://github.com/chinyereunamba"} target="_blank">
          <FaGithub />
        </Link>
        <Link href={"https://twitter.com/chinyere_un"} target="_blank">
          <FaXTwitter />
        </Link>
        <Link href={"https://linkedin.com/chinyereunamba"} target="_blank">
          <FaLinkedinIn />
        </Link>
      </div>
      <div>
        <p>
          &copy; 2024. <b>Chinyere Unamba</b>
        </p>
      </div>
    </section>
  );
}

export default Footer;
