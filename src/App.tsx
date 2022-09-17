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

  // scroll position
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollValue(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  //   const onScroll = (e) => {
  //     setScrollValue(e.target.documentElement.scrollTop);
  //   };

  //   window.addEventListener('scroll', onScroll);

  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [scrollValue]);

  // element height
  // const [heightValue, setHeightValue] = useState();

  // window.addEventListener('resize', () => {
  //   setHeightValue(listRef.current.clientHeight);
  // });

  // console.log(heightValue);
  // console.log(scrollValue);

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
