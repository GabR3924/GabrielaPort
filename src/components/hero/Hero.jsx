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
      <Nav/>
      <div className={css.container}>
        <div className={css.left}>  
          <div className={css.text}>
          <h1>hola</h1>
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
      <ReactPlayer className={css.video}
        url =  {video}
        playing
        loop
        muted
        width="150vw"
        height="100vh"
        marginTop="-1rem"
        style={{ position: 'fixed', zIndex: -1 }}
      />
    </div>
  )
}

export default Hero;