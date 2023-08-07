import React from 'react';
import styles from './styles.module.css';

interface ButtonContainerProps {
  onClick: (arg0: string) => void;
}

const ButtonContainer = ({ onClick }: ButtonContainerProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => onClick('accomplishments')}>Accomplishments</button>
      <button onClick={() => onClick('skills')}>Skills</button>
      <button onClick={() => onClick('education')}>Education</button>
      <button onClick={() => onClick('extracurriculum')}>Extracurriculum</button>
    </div>
  );
};

export default ButtonContainer;

