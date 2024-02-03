import React, { FunctionComponent } from 'react';
import styles from './Resume.module.scss';
import { SkillsBlockList } from './skills/SkillsBlock';
import { ExperienceBlockList } from './experience/ExperienceBlock';
import { resumeData as data } from './ResumeData';

export const Resume: FunctionComponent = () => {
  const skillsData = data.skillSection;
  const experienceData = data.experienceSection;

  return (
    <div id="Resume" className={styles.resumesection}>
      <div className={styles.skillscontainer}>
        <h2 className={styles.resumeheadline}>Skills</h2>
        <SkillsBlockList data={skillsData} />
      </div>
      <div className={styles.workexperience}>
        <h2 className={styles.resumeheadline}>Experience</h2>
        <ExperienceBlockList data={experienceData} />
      </div>
    </div>
  );
};
