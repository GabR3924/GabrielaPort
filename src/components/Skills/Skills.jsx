import css from './Skills.module.css'
import { skills } from '../../Data/constants'

export default function Skills() {
  return (
    <div className={css.container} id="skills">
      <div className={css.wrapper}>
        <h1 className={css.title}>Skills</h1>
        <p className={css.desc}>Here are some of my skills on which I have been working on for the past year.</p>
        <div className={css.skills_container}>
          {skills.map((skill) => (
            <div className={css.skills}>
              <h1 className={css.skill_title}>{skill.title}</h1>
              <div className={css.skill_list}>
                {skill.skills.map((item) => (
                    <div className={css.skill_item}>
                      <img src={item.image} alt="" />
                      {item.name}
                    </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
