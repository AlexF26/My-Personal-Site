import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <About />
      </div>
    </div>
  );
}

export default App;
