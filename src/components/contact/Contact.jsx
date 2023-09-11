import React from "react";
import css from "./Contact.module.css";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1>Estemos en Contacto</h1>
        <ul className={css.icons}>
          <li className={css.icon}>
            <a href="https://github.com/GabR3924" target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
          </li>
          <li className={css.icon}>
            <a href="https://www.linkedin.com/in/gabriela-rodriguez-24b4b0214/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li className={css.icon}>
            <a href="https://mail.google.com/mail/u/1/#inbox" target="_blank" rel="noopener noreferrer">
              <SiGmail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
