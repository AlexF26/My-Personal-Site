import React from 'react';
import { useEffect, useState, useRef } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { navLinks } from './HeaderLinks';

interface AppProps {
  scrollvalue: number;
}

function Header(props: AppProps) {
  // genereate nav links
  const generateNavLinks = navLinks.map((item) => {
    return (
      <li>
        <Link to="" className={`${styles.navlink}`}>
          {item.link}
        </Link>
      </li>
    );
  });

  // get navbar dimensions for scrollbar animnation
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    setNavHeight(navRef.current.clientHeight);
  }, []);

  // scroll boolean - activate scrollbar animation
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setScroll(window.pageYOffset > navHeight));
    }
  });

  // scrollPos - scroll position
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    setScrollPos(window.pageYOffset);
  }, [scrollPos]);

  return (
    <nav ref={navRef} className={`${styles.navbar} ${scroll && styles.navbar_scroll}`}>
      <ul className={styles.navlinkscontainer}>{generateNavLinks}</ul>
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
