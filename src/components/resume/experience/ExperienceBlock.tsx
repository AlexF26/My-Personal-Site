import { FunctionComponent } from 'react';
import styles from '../Resume.module.scss';

type ExperienceBlockProps = {
  title: string;
  dates: string;
  list: string[];
};

export const ExperienceBlock: FunctionComponent<ExperienceBlockProps> = ({
  title,
  dates,
  list,
}) => {
  return (
    <>
      <h3 className={styles.resumeblocktitle}>{title}</h3>
      <div className={styles.resumedates}>{dates}</div>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};

type ExperienceBlockListProps = {
  data: ExperienceData[];
};

type ExperienceData = {
  jobTitle: string;
  dates: string;
  responsibility: string[];
};

export const ExperienceBlockList: FunctionComponent<ExperienceBlockListProps> = ({
  data,
}) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles.resumeblock}>
            <ExperienceBlock
              title={item.jobTitle}
              dates={item.dates}
              list={item.responsibility}
            />
          </div>
        );
      })}
    </>
  );
};
