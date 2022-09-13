import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  color: string;
}

function Button(props: ButtonProps) {
  return <button className={`${styles.button} ${styles[props.color]}`}>Contact Me</button>;
}

export default Button;
