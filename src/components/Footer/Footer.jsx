import { Bio } from '../../data/constants';
import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import css from './Footer.module.css';

function Footer() {
  return (
    <div className={css.footerContainer} id='footer'>
      <footer className={css.footerWrapper}>
        <h1 className={css.logo}>Gabriela Rodriguez</h1>
        <nav className={css.nav}>
          <a href="#about" className={css.navLink}>About</a>
          <a href="#skills" className={css.navLink}>Skills</a>
          <a href="#projects" className={css.navLink}>Projects</a>
  
        </nav>
        <div className={css.socialMediaIcons}>
          <a href={Bio.github} target="display" className={css.socialMediaIcon}><FaFacebookSquare /></a>
          <a href={Bio.twitter} target="display" className={css.socialMediaIcon}><FaTwitterSquare /></a>
          <a href={Bio.linkedin} target="display" className={css.socialMediaIcon}><FaLinkedin /></a>
        </div>
        <p className={css.copyright}>
          &copy; 2023 Gabriela Rodriguez . All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
