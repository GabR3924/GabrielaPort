import React from "react";
import css from "./Work.module.css";
import Notas from "../../assets/notas.jpg";
import SkinPage from "../../assets/SkinPage.png";
import Juego from "../../assets/juego.png";
import {AiFillGithub} from 'react-icons/ai'
import {BsBoxArrowUpRight} from 'react-icons/bs'

const Works = () => { 
  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1>Portfolio</h1>
        <div className={css.work}>

          <div className={css.note}>
            <div>
            <img src={Notas} alt="" />
           ` </div>`
            <div className={css.span}>
              <h4>Note App</h4>
              
              <div className={css.go}>
                <AiFillGithub className={css.icons}/>
                <BsBoxArrowUpRight className={css.icons}/>
              </div>
            </div>
          </div>

          <div className={css.juego}>
            <div>
            <img src={Juego} alt="" />
            </div>
            <div className={css.span}>
              <h4>Juego 2048</h4>
              
              <div className={css.go}>
                <AiFillGithub className={css.icons}/>
                <BsBoxArrowUpRight className={css.icons}/>
              </div>
            </div>
          </div>
          <div className={css.juego}>
            <div>
            <img src={Juego} alt="" />
            </div>
            <div className={css.span}>
              <h4>Juego 2048</h4>
              
              <div className={css.go}>
                <AiFillGithub className={css.icons}/>
                <BsBoxArrowUpRight className={css.icons}/>
              </div>
            </div>
          </div>
          <div className={css.skinPage}>
            <img src={SkinPage} alt="" />
            <div className={css.span}>
              <h4>Skincare Page</h4>
             
              <div className={css.go}>
                <AiFillGithub className={css.icons}/>
                <BsBoxArrowUpRight className={css.icons}/>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Works;
