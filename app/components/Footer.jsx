import React from "react"
import style from "./Footer.module.css"
import Link from "next/link"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6"

function Footer() {
    return (
        <section className={style.footer}>
            <div className={style.social}>
                <Link
                    href={"https://github.com/chinyereunamba"}
                    target="_blank"
                >
                    <FaGithub />
                </Link>
                <Link
                    href={"https://twitter.com/esther_unamba"}
                    target="_blank"
                >
                    <FaTwitter />
                </Link>
                <Link
                    href={"https://linkedin.com/chinyereunamba"}
                    target="_blank"
                >
                    <FaLinkedin />
                </Link>
            </div>
            <div>
                <p>&copy; 2023. <b>Chinyere Unamba</b></p>
            </div>
        </section>
    )
}

export default Footer
