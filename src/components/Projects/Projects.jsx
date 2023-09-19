import React from 'react';
import { useState } from 'react';
import css from './Projects.module.css'; // Asegúrate de importar tus estilos CSS Modules
import ProjectCard from '../Cards/Projects';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  
  return (
    <div className={css.container} id="projects">
      <div className={css.wrapper}>
        <div className={css.title}>Projects</div>
       {/* { <div className={css.desc}>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </div>
        <div className={css.toggleButtonGroup}>
          {toggle === 'all' ? (
            <div className={`${css.toggleButton} ${css.active}`} onClick={() => setToggle('all')}>
              All
            </div>
          ) : (
            <div className={css.toggleButton} onClick={() => setToggle('all')}>
              All
            </div>
          )}
          <div className={css.divider} />
          {toggle === 'web app' ? (
            <div className={`${css.toggleButton} ${css.active}`} onClick={() => setToggle('web app')}>
              WEB APP'S
            </div>
          ) : (
            <div className={css.toggleButton} onClick={() => setToggle('web app')}>
              WEB APP'S
            </div>
          )}
          <div className={css.divider} />
          {toggle === 'android app' ? (
            <div className={`${css.toggleButton} ${css.active}`} onClick={() => setToggle('android app')}>
              ANDROID APP'S
            </div>
          ) : (
            <div className={css.toggleButton} onClick={() => setToggle('android app')}>
              ANDROID APP'S
            </div>
          )}
          <div className={css.divider} />
          {toggle === 'machine learning' ? (
            <div className={`${css.toggleButton} ${css.active}`} onClick={() => setToggle('machine learning')}>
              MACHINE LEARNING
            </div>
          ) : (
            <div className={css.toggleButton} onClick={() => setToggle('machine learning')}>
              MACHINE LEARNING
            </div>
          )}
        </div>} */}
        <div className={css.cardContainer}>
          {toggle === 'all' &&
            projects.map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

