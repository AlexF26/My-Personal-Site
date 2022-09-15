import React from 'react';
import styles from './Resume.module.scss';

function Resume() {
  return (
    <div className={styles.resumesection}>
      <div className={styles.skillscontainer}>
        <h2 className={styles.resumeheadline}>Skills</h2>
        <div className={styles.resumeblock}>
          <h3 className={styles.resumeblocktitle}>Design</h3>
          <p>Figma, Invision, Miro, Zeroheight, Userzoom, Dynamic Yield, Illustrator, Photoshop</p>
        </div>
      </div>
      <div className={styles.workexperience}>
        <h2 className={styles.resumeheadline}>Resume</h2>
        <div className={styles.resumeblock}>
          <h3 className={styles.resumeblocktitle}>Build with Ferguson - Content Personalization</h3>
          <div className={styles.resumedates}>2022 - Present</div>
          <ul>
            <li>Create targeted experiences for different user segments.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
