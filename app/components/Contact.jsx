import React from "react"
import style from "./Contact.module.css"
import { FaEnvelope, FaPhone, FaLocationPin, FaLocationCrosshairs } from "react-icons/fa6"
import Link from "next/link"

function Contact() {
    return (
        <section className={style.contact} id="contact">
            <h1 className="title">Contact me</h1>
            <div className={style.contact_cards}>
                <ContactCard
                    contact={"Port Harcourt, Nigeria"}
                    icon={<FaLocationCrosshairs />}
                />
                <ContactCard
                    contact={
                        <Link href={"mailto:chinyereunamba17@gmail.com"}>
                            chinyereunamba17@gmail.com
                        </Link>
                    }
                    icon={<FaEnvelope />}
                />
                <ContactCard
                    contact={
                        <Link href={"tel:+2349044196306"}>
                            +234 904 419 6306
                        </Link>
                    }
                    icon={<FaPhone />}
                />
            </div>
        </section>
    )
}

function ContactCard({ contact, icon }) {
    return (
        <div className={style.card}>
            <div className={style.icon}>{icon}</div>
            <div>{contact}</div>
        </div>
    )
}

export default Contact
