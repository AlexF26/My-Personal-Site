import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
// import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.footercontainer}>
      <div onClick={scrollToTop} className={styles.backtotop}>
        <div className={styles.backtotoplink}>
          Back to top{' '}
          <FontAwesomeIcon className={styles.arrowupicon} icon={faCaretUp} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
