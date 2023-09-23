import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, project }) => {
  const modalClassName = isOpen ? styles.modalOpen : styles.modalClosed;

  const handleClose = () => {
    onClose(); // Llama a la función onClose cuando se cierra el modal
  };

  return (
    <div className={`${styles.modal} ${modalClassName}`}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src={project?.image} className={styles.image} alt="Project" />
          <div className={styles.title}>{project?.title}</div>
          <div className={styles.date}>{project?.date}</div>
          <div className={styles.tags}>
            {project?.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className={styles.desc}>{project?.description}</div>
          <div className={styles.buttonGroup}>
            <a
              href={project?.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buttonDull}
            >
              View Code
            </a>
            <a
              href={project?.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              View Live App
            </a>
            <button className={styles.closeButton} onClick={handleClose}>
              &times;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
