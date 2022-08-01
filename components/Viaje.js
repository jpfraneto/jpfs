import React from 'react';
import styles from './Viaje.module.css';

const Viaje = () => {
  const dias = Array.from(Array(23).keys());
  dias[0] = { dormirEn: 'paris' };
  return (
    <div className={styles.mainContainer}>
      {dias.map((x, y) => (
        <div
          onClick={() => console.log(x)}
          key={y}
          className={styles.dayContainer}
        >
          {x.dormirEn}
        </div>
      ))}
    </div>
  );
};

export default Viaje;
