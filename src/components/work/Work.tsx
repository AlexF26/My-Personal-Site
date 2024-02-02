import React from 'react';
import styles from './Work.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import lottiedev from '../../assets/lottiedesign.json';
import lottiedesign from '../../assets/lottiedev.json';
import { Button } from '../button/Button';

function Work() {
  return (
    <div id="Work" className={styles.workcontainer}>
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
              <p className={styles.cardparagraph}>
                View my projects and case studies on behance
              </p>
              <Button
                text="View Designs"
                color="primary"
                size="small"
                action={() => {
                  window.location.href = 'https://www.behance.net/alexfeller1';
                }}
              />
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
              <p className={styles.cardparagraph}>
                View my development work and code on Github
              </p>
              <Button
                text="View Code"
                color="primary"
                size="small"
                action={() => {
                  window.location.href = 'https://github.com/AlexF26';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
