import React from "react";
import css from "./Nav.module.css";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <div className={css.logo}>Gabriela Rodriguez</div>
        <ul className={css.list}>
          <li>
            <AiOutlineLine className={css.iconLine} />
          </li>
          <Link to="https://github.com/GabR3924">
            <li>
              <BsGithub className={css.icon} />
            </li>
          </Link>

          <li>
            <FaLinkedin className={css.icon} />
          </li>
        </ul>
      </div>
      {/* <div className={css.mobile}>
        <div className={css.uno}>
          <BsGithub className={css.icon} />
          <hr />
          <FaLinkedin className={css.icon} />
          <hr />
          <SiGmail className={css.icon} />
        </div>
        <div className={css.dos}>
          <p>Proyectos</p>
          <hr />
          <p>CV</p>
        </div>
      </div> */}
    </div>
  );
};

export default Nav;
