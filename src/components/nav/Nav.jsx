import React from "react";
import css from "./Nav.module.css";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";
import { SiGmail } from 'react-icons/si'
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        
          <div className={css.logo}>GabrielaDev</div>
          <ul className={css.list}>
            <li>Contact</li>
            <li><AiOutlineLine className={css.iconLine} /></li>
            <a href="github.com/GabR3924"> 
            <li><BsGithub className={css.icon} /></li>
            </a>
            <li><FaLinkedin className={css.icon} /></li>
          </ul>
        
      </div>
      <div className={css.mobile}>
            <div className={css.uno}>
             <BsGithub className={css.icon}/> 
             <hr />
             <FaLinkedin  className={css.icon}/>
             <hr />
             <SiGmail  className={css.icon}/>
            </div>
            <div className={css.dos}>
              <p>Proyectos</p>
              <hr />
              <p>CV</p>
            </div>
        </div>
    </div>
  );
};

export default Nav;
