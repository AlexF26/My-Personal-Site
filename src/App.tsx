import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <About />
        <Work />
      </div>
    </div>
  );
}

export default App;
