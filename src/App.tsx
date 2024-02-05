import React from 'react';
import styles from './App.module.scss';
import { Header } from './components/header/Header';
import { About } from './components/about/About';
import { Work } from './components/work/Work';
import { Resume } from './components/resume/Resume';
import Footer from './components/footer/Footer';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-FKGSNK7Z6Z');

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <About />
        <Work />
        <Resume />
      </main>
      <Footer />
    </>
  );
};

export default App;
