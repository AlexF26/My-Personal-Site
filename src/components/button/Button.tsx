import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  color: 'primary' | 'secondary';
  size: 'small' | 'large';
  text: string;
  action?: () => void;
};

export const Button = ({ color, text, size, action }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[color]} ${styles[size]}`}
      onClick={action}
    >
      {text}
    </button>
  );
};
