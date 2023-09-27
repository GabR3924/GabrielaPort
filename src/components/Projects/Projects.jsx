import React, { useState } from 'react';
import css from './Projects.module.css';
import Modal from '../Modal/Modal';
import Card from '../Cards/Projects'
import { projects } from '../../data/constants';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toggle, setToggle] = useState('all');

  const openModal = (project) => {
    console.log('Abriendo el modal con el proyecto:', project);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };
  return (
    <div className={css.container} id="projects">
      <div className={css.wrapper}>
        <div className={css.title}>Projects</div>
        <div className={css.desc}>
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
             API'S
            </div>
          ) : (
            <div className={css.toggleButton} onClick={() => setToggle('android app')}>
             API'S
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
        </div>
      </div>
      <div className={css.cardContainer}>
  {toggle === 'all' &&
    projects.map((project) => (
      <Card
        key={project.id}
        project={project}
        openModal={() => openModal(project)} // Llama a openModal cuando se hace clic

      />
    ))}
  {projects
    .filter((item) => item.category === toggle)
    .map((project) => (
      <Card
        key={project.id}
        project={project}
        openModal={() => openModal(project)} // Llama a openModal cuando se hace clic

      />
    ))}
</div>
{isModalOpen && selectedProject && (
        <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject}>
          {/* Aquí puedes renderizar la información detallada del proyecto */}
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.description}</p>
          {/* Otros detalles del proyecto */}
        </Modal>
      )}
    </div>
  );
};

export default Projects;
