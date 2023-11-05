import React from "react"
import style from "./Contact.module.css"
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa6"

import { BiShareAlt, BiMapPin } from "react-icons/bi"
import Link from "next/link"

function Contact() {
    return (
        <section className={style.contact} id="contact">
            <h1 className="title">Contact me</h1>
            <div className={style.contact_cards}>
                <ContactCard
                    contact={
                        <Link href={"mailto:cunamba2@gmail.com"}>
                            cunamba2@gmail.com
                        </Link>
                    }
                    method={"Email"}
                    icon={<FaEnvelope />}
                />
                <ContactCard
                    contact={
                        <Link href={"tel:+2349044196306"}>
                            +234 904 419 6306
                        </Link>
                    }
                    method={"Phone"}
                    icon={<FaPhone />}
                />
                <ContactCard
                    contact={"Port Harcourt, Nigeria"}
                    icon={<BiMapPin />}
                    method={"Location"}
                />

                <ContactCard
                    contact={
                        <span className={style.social}>
                            <Link target="_blank" href={"https://github.com/chinyereunamba/"}>
                                <FaGithub />
                            </Link>
                            <Link target="_blank" href={"https://twitter.com/esther_unamba/"}>
                                <FaTwitter />
                            </Link>
                            <Link target="_blank" href={"https://linkedin.com/in/chinyereunamba/"}>
                                <FaLinkedinIn />
                            </Link>
                        </span>
                    }
                    icon={<BiShareAlt />}
                    method={"Follow me"}
                />
            </div>
        </section>
    )
}

function ContactCard({ contact, icon, method }) {
    return (
        <div className={style.card}>
            <div className={style.icon}>{icon}</div>
            <p>{method}</p>
            <span className={style.contact_info}>{contact}</span>
        </div>
    )
}

export default Contact
