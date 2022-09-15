import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <About />
        <Work />
        <Resume />
      </div>
      <Footer />
    </div>
  );
}

export default App;
