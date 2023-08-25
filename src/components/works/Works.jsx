import React from "react";
import css from "./Work.module.css";
import Notas from "../../assets/notas.jpg";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Works = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1>Portfolio</h1>
        <h2></h2>
        <div className={css.work}>
          <div className={css.note}>
            <div>
              <img src={Notas} alt="" />
            </div>
            
            <div className={css.span}>
              <h4>Note App</h4>
            </div>
          </div>
          <div className={css.note}>
            <div>
              <img src={Notas} alt="" />
            </div>
            
            <div className={css.span}>
              <h4>Note App</h4>
            </div>
          </div>
          <div className={css.note}>
            <div>
              <img src={Notas} alt="" />
            </div>
            
            <div className={css.span}>
              <h4>Note App</h4>
            </div>
          </div>
          <div className={css.note}>
            <div>
              <img src={Notas} alt="" />
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
