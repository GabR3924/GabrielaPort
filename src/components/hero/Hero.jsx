import css from "./Hero.module.css";
import { Bio } from "../../Data/constants";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div>
      <div className={css.hero_container}>
        <div className={css.hero_bg}></div>
        <div className={css.hero_inner_container}>
          <div className={css.hero_right}>
            <img src='../../assets//hero-image.png' alt="" className={css.img}/>
          </div>
          <div className={css.hero_left}>
            <div className={css.title}>
              Hola, soy <br /> {Bio.name}
            </div>
            <div className={css.text_loop}>
              Yo soy
              <span>
                <Typewriter options=
              {{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}/>
              </span>
            </div>
            <div className={css.subtitle}>
              {Bio.description}
            </div>
            <div className={css.resume_btn}>
              <a href={Bio.resume} target="display">Check Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
