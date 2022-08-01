import React from 'react';
import styles from './styles.module.css';

const Viaje = () => {
  const dias = Array.from(Array(23).keys());
  return (
    <div className={styles.mainContainer}>
      {dias.map((x, y) => (
        <div key={y}></div>
      ))}
    </div>
  );
};

export default Viaje;
