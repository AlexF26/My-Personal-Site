import React from 'react';
import { useEffect, useState, useRef } from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const listRef = useRef(null);

  // get main scroll position
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollValue(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header scrollvalue={scrollValue} />
      <main ref={listRef} className={styles.container}>
        <About />
        <Work />
        <Resume />
      </main>
      <Footer />
    </>
  );
}

export default App;
