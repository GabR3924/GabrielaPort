import React from 'react';
import css from './Project.module.css'; // Asegúrate de importar tus estilos CSS Modules

const ProjectCards = ({ project, openModal, setOpenModal }) => {
  return (
    <div className={css.card} onClick={() => setOpenModal({ state: true, project: project })}>
      <img src={project.image} className={css.image} alt={project.title} />
      <div className={css.tags}>
        {project.tags?.map((tag, index) => (
          <span className={css.tag} key={index}>
            {tag}
          </span>
        ))}
      </div>
      <div className={css.details}>
        <div className={css.title}>{project.title}</div>
        <div className={css.date}>{project.date}</div>
        <div className={css.description}>{project.description}</div>
      </div>
      
      {/* <button className={css.button}>View Project</button> */}
    </div>
  );
};

export default ProjectCards;
