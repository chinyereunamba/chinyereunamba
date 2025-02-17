import React from "react";
import style from "./Contact.module.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";

import { BiShareAlt, BiMapPin } from "react-icons/bi";
import Link from "next/link";
import SpotlightCard from "../utils/Spolight";

function Contact() {
  return (
    <section className={style.contact} id="contact">
      <h1 className="title">Contact me</h1>
      <div className={style.contact_cards}>
        <ContactCard
          contact={
            <Link href={"mailto:cunamba2@gmail.com"}>cunamba2@gmail.com</Link>
          }
          action={"Email"}
          icon={<FaEnvelope />}
        />
        <ContactCard
          contact={<Link href={"tel:+2349044196306"}>+234 904 419 6306</Link>}
          action={"Phone"}
          icon={<FaPhone />}
        />
        <ContactCard
          contact={"Port Harcourt, Nigeria"}
          icon={<BiMapPin />}
          action={"Location"}
        />

        <ContactCard
          contact={
            <span className={style.social}>
              <Link target="_blank" href={"https://github.com/chinyereunamba/"}>
                <FaGithub />
              </Link>
              <Link target="_blank" href={"https://twitter.com/chinyere_un/"}>
                <FaXTwitter />
              </Link>
              <Link
                target="_blank"
                href={"https://linkedin.com/in/chinyereunamba/"}
              >
                <FaLinkedinIn />
              </Link>
            </span>
          }
          icon={<BiShareAlt />}
          action={"Follow me"}
        />
      </div>
      <meta name="twitter:site" content="@chinyere_un" />
      <meta name="x:site" content="@chinyere_un" />
    </section>
  );
}
type ContactCardProps = {
  contact: React.JSX.Element | string;
  icon: React.JSX.Element;
  action?: string;
};

function ContactCard({ contact, icon, action }: ContactCardProps) {
  return (
      <SpotlightCard className={style.card} spotlightColor="rgba(56, 104, 227, 0.2)">
        <div className={style.icon}>{icon}</div>
        <p>{action}</p>
        <span className={style.contact_info}>{contact}</span>
      </SpotlightCard>
  );
}

export default Contact;
