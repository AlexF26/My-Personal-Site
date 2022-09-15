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
        <div className={styles.resumeblock}>
          <h3 className={styles.resumeblocktitle}>Development</h3>
          <p>HTML, CSS, SASS, JavaScript, React, StoryBook, Git, GitHub</p>
        </div>
        <div className={styles.resumeblock}>
          <h3 className={styles.resumeblocktitle}>Other</h3>
          <p>Jira &amp; Workfront - Project management</p>
        </div>
      </div>
      <div className={styles.workexperience}>
        <h2 className={styles.resumeheadline}>Resume</h2>
        <div className={styles.resumeblock}>
          <h3 className={styles.resumeblocktitle}>Build with Ferguson - Content Personalization</h3>
          <div className={styles.resumedates}>2022 - Present</div>
          <ul>
            <li>Create targeted experiences for different user segments.</li>
            <li>Design/develop templates within personalization tools.</li>
            <li>Breakdown data to optimize user engagement and performance.</li>
          </ul>
        </div>
        <div className={styles.resumeblock}>
          <h3 className={styles.resumeblocktitle}>Ferguson Enterprises — Front End Development</h3>
          <div className={styles.resumedates}>2020 - 2022</div>
          <ul>
            <li>Developed promotional content, landing pages, and site experiences.</li>
            <li>Created promotions generating over $2.5million in sales.</li>
            <li>Creation of templates for content management system conversion.</li>
            <li>Created processes that have enhanced efficiencies by 50%.</li>
            <li>Creation of JSON schemas for use on cms.</li>
            <li>Developed dynamic content utilizing JSON schemas.</li>
            <li>Development of interactive and responsive web pages.</li>
          </ul>
        </div>
        <div className={styles.resumeblock}>
          <h3 className={styles.resumeblocktitle}>Ferguson Enterprises — UI/UX Design</h3>
          <div className={styles.resumedates}>2017 - 2020</div>
          <ul>
            <li>Creation of UI components and documentation.</li>
            <li>
              Addition of content segment to UI Kit which has increased cross-team collaboration and
              consistencies.
            </li>
            <li>
              Created and maintained content design systems for visual design and merchandising
              teams to create promotional content.
            </li>
            <li>Designed landing pages and site experiences to support marketing initiatives.</li>
            <li>Researched and prioritized user issues to create effective design solutions.</li>
            <li>
              Worked with dedicated UX researchers to test prototypes, and confirm hypotheses
              utilizing user studies.
            </li>
            <li>Iterated designs based on user pain points for enhanced user experiences.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
