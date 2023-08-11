import React from 'react'
import css from './Hero.module.css'
import Nav from '../nav/Nav'
import { BsArrowDownCircle } from 'react-icons/bs'
import logo from '../../assets/launch.png'



const Hero = () => {
  return (
    <div className={css.section}>
      <Nav/>
      <div className={css.container}>
        <div className={css.left}>
          <div className={css.text}>
          <h1>Hi Im a web developer</h1>
          <span>We enjoy creating delightful, human-centered digital experiences.</span>
          </div>
          <div className={css.btns}>
          <button>Work</button>
          <button>Download Resume  <BsArrowDownCircle className={css.icon}/></button>
          </div>
        </div>
        <div className={css.right}>

          <img className={css.logo} src={logo} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Hero;