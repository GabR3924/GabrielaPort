import React from "react";
import css from "./Work.module.css";
import Notas from "../../assets/Notas.jpg";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Works = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1>Portfolio</h1>
        <h2></h2>
        <div className={css.work}>
          <div className={css.music}>
          <div className={css.img} id={css.img1}>
            </div>
            
            <div className={css.span}>
              <a href="https://soul-music-test-front.netlify.app/home" target="blank">

              <h4>Soul Music</h4>
              </a>
            </div>
          </div>
          <div className={css.movies}>
          <div className={css.img} id={css.img2}>
            </div>
            
            <div className={css.span}>
            <a href="https://movies-front-tau.vercel.app/" target="blank">
              <h4>Green Screen</h4>
              </a>
            </div>
          </div>
          <div className={css.note}>
          <div className={css.img} id={css.img3}>
            </div>
            
            <div className={css.span}>
            <a href="https://github.com/GabR3924/JobsApp" target="blank">
              <h4>Jobs App</h4>
              </a>
            </div>
          </div>
          <div className={css.note}>
            <div className={css.img} id={css.img4}>
            </div>
            
            <div className={css.span}>
              <h4>Note App</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
