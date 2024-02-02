import React, { FunctionComponent } from 'react';
import { useEffect, useState, useRef } from 'react';
import styles from './Header.module.scss';
import { HashLink as Link } from 'react-router-hash-link';

export const Header = () => {
  const [navHeight, setNavHeight] = useState(0);
  const [isScrollPastNav, setIsScrollPastNav] = useState(false);
  const navRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollPastNav(window.scrollY > navHeight);
    };

    const handleNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.clientHeight);
      }
    };

    handleNavHeight();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navHeight, navRef]);

  return (
    <nav
      ref={navRef}
      className={`${styles.navbar} ${isScrollPastNav && styles.navbar_scroll}`}
    >
      <HeaderLinks items={headerData} />
    </nav>
  );
};

type HeaderLinksProps = {
  items: HeaderItem[];
};

const HeaderLinks: FunctionComponent<HeaderLinksProps> = ({ items }) => {
  return (
    <ul className={styles.navlinkscontainer}>
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.url} className={`${styles.navlink}`}>
            {item.link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

type HeaderItem = {
  link: string;
  url: string;
};

const headerData = [
  {
    link: 'About',
    url: '#About',
  },
  {
    link: 'Work',
    url: '#Work',
  },
  {
    link: 'Resume',
    url: '#Resume',
  },
];
