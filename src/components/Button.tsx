import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  color: string;
  text: string;
  size: string;
  action: () => void;
};

function Button(props: ButtonProps) {
  return (
    <button
      type='button'
      className={`${styles.button} ${styles[props.color]} ${styles[props.size]}`}
      onClick={props.action}
    >
      {props.text}
    </button>
  );
}

export default Button;
