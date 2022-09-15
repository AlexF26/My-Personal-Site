import React from 'react';
import styles from './Work.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import lottiedev from '../assets/98561-coding-animation.json';
import lottiedesign from '../assets/98574-web-site-design.json';
import Button from './Button';

function Work() {
  return (
    <div className={styles.workcontainer}>
      <div className={styles.worksection}>
        <h2 className={styles.workheadline}>View my Work</h2>
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <Player
              src={lottiedesign}
              className={`player ${styles.lottiecard}`}
              loop
              autoplay
              speed={0.5}
            />
            <div className={styles.cardcontent}>
              <p className={styles.cardparagraph}>View my projects and case studies on behance</p>
              <Button text="View Designs" color="primary" size="small" />
            </div>
          </div>
          <div className={styles.card}>
            <Player
              src={lottiedev}
              className={`player ${styles.lottiecard}`}
              loop
              autoplay
              speed={0.5}
            />
            <div className={styles.cardcontent}>
              <p className={styles.cardparagraph}>View my development work and code on Github</p>
              <Button text="View Code" color="primary" size="small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
