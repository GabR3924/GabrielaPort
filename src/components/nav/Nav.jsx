import { useState } from 'react';
import css from './Nav.module.css';
import { AiOutlineMenu } from 'react-icons/ai'
import { Bio } from '../../data/constants';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav> 
      <div className={css.nav_container}>
        <div className={css.nav_logo}>
          <div className={css.icon}>
            
          </div>
          <span>Portfolio</span>
        </div>
        <div className={css.mobile_icon}>
          <AiOutlineMenu
          onClick={() => {
            setOpen(!open)
          }}/>
        </div>
        <div className={css.nav_item}>
          <div className={css.nav_link}>
            <a href="#home">home</a>
          </div>
          <div className={css.nav_link}>
            <a href="#skills">Skills</a>
          </div>
          <div className={css.nav_link}>
            <a href="#projects">Projects</a>
          </div>
          <div className={css.nav_link}>
            <a href="#footer">Footer</a>
          </div>
        </div>
        <div className={css.btn_container}>
        <a href={Bio.github} target="display" className={css.github_btn}><div>Github profille</div></a>
        </div>
      </div>
      {
        open && (
          <div className={css.mobile_menu.open}>
            <div className={css.mobile_menu_links}><a href="#home">home</a></div>
            <div className={css.mobile_menu_links}> <a href="#skills">Skills</a></div>
            <div className={css.mobile_menu_links}> <a href="#projects">Projects</a></div>
  
            <div className={css.mobile_menu_links}>  <a href="#footer">Footer</a></div>
            <div className={css.github_btn_mobile}> <a href={Bio.github} target="display"><div>Github profille</div></a></div>
          </div>
        )
      }
    </nav>
  );
}
