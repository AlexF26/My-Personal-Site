import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  color: string;
  text: string;
  size: string;
}

function Button(props: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[props.color]} ${styles[props.size]}`}>
      {props.text}
    </button>
  );
}

export default Button;
