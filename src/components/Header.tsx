import React from 'react';
import { useEffect, useState, useRef } from 'react';
import styles from './Header.module.scss';
// import { Link } from 'react-router-dom';
import { navLinks } from './HeaderLinks';
import { HashLink as Link } from 'react-router-hash-link';

interface AppProps {
  scrollvalue: number;
}

function Header(props: AppProps) {
  // genereate nav links
  const generateNavLinks = navLinks.map((item) => {
    return (
      <li>
        <Link to={item.url} className={`${styles.navlink}`}>
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

  return (
    <nav ref={navRef} className={`${styles.navbar} ${scroll && styles.navbar_scroll}`}>
      <ul className={styles.navlinkscontainer}>{generateNavLinks}</ul>
    </nav>
  );
}

export default Header;
