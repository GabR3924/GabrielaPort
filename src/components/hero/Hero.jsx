import React from 'react'
import css from './Hero.module.css'
import Nav from '../nav/Nav'
import { BsArrowDownCircle } from 'react-icons/bs'


const Hero = () => {
  return (
    <div className={css.section}>
      <Nav/>
      <div className={css.container}>
        <div className={css.left}>  
          <div className={css.text}>
          <h2>FullStack Developer con experiencia creando aplicaciones web confiables y escalables con tecnologia en la nube</h2>
          </div>
          <div className={css.galeria}>
        <ul>
          <li>AWS</li>
          <li>Node js</li>
          <li>React</li>
          <li>React Native</li>
        </ul>
      </div>
        </div>
      </div>     
    </div>
  )
}

export default Hero;