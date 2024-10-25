import React from 'react';
import styles from '../style/Keyboard.module.css';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const KeyBoard = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(75px,1fr))',
        gap: '.5rem',
      }}
    >
      {KEYS.map((key) => (
        <button className={`${styles.btn} `} key={key}>
          {key}
        </button>
      ))}
    </div>
  );
};

export default KeyBoard;
