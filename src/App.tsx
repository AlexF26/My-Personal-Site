import React from 'react';
import { useEffect, useState, useRef } from 'react';
import styles from './App.module.scss';
import Header from './components/header/Header';
import About from './components/about/About';
import Work from './components/work/Work';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';

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
