import React from 'react'
import css from './Hero.module.css'
import Nav from '../nav/Nav'
import { BsArrowDownCircle } from 'react-icons/bs'
import logo from '../../assets/launch.png'
import video from "../../assets/portVideo.mp4"
import ReactPlayer from 'react-player';


const Hero = () => {
  return (
    <div className={css.section}>
       <ReactPlayer
        url =  {video}
        playing
        loop
        muted
        width="100%"
        height="100%"
       
      />
      <Nav/>
      <div className={css.container}>
        <div className={css.left}>  
          <div className={css.text}>
          <h1>Hola</h1>
          <span>We enjoy creating delightful, human-centered digital experiences.</span>
          </div>
          <div className={css.btns}>
          <button>Work</button>
          <button>Download Resume  <BsArrowDownCircle className={css.icon}/></button>
          </div>
        </div>
        <div className={css.right}>

          {/* <img className={css.logo} src={logo} alt="" /> */}

        </div>
      </div>
    </div>
  )
}

export default Hero;