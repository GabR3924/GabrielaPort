import React from 'react'
import css from './Contact.module.css'
import { SiGmail } from 'react-icons/si'
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1>
        Estemos en Contacto
        </h1>
        <ul className={css.icons}>
            <li className={css.icon}><BsGithub/> <span>GitHub</span></li>
            <li className={css.icon}><FaLinkedin/><span>Conectar</span></li>
            <li className={css.icon}><SiGmail/>
            <span>Email</span>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact