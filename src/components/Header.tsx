import React from 'react';
import { useEffect, useState, useRef } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

function Header() {
  //nav dimensions
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    setNavHeight(navRef.current.clientHeight);
  }, []);

  // scrollbar animation
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setScroll(window.pageYOffset > navHeight));
    }
  });

  return (
    <nav ref={navRef} className={`${styles.navbar} ${scroll ? styles.navbar_scroll : ''}`}>
      <ul className={styles.navlinkscontainer}>
        <li>
          <Link to="" className={`${styles.navlink} ${scroll ? styles.navlink_scroll : ''}`}>
            About
          </Link>
        </li>
        <li>
          <Link to="" className={`${styles.navlink} ${scroll ? styles.navlink_scroll : ''}`}>
            Work
          </Link>
        </li>
        <li>
          <Link to="" className={`${styles.navlink} ${scroll ? styles.navlink_scroll : ''}`}>
            Resume
          </Link>
        </li>
      </ul>
      {
        <Link to="" className={styles.backtotop}>
          <div className={styles.backtotoplink}>
            Back to top <FontAwesomeIcon className={styles.arrowupicon} icon={faCaretUp} />
          </div>
        </Link>
      }
    </nav>
  );
}

export default Header;
