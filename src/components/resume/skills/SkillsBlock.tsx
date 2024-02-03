import { FunctionComponent } from 'react';
import styles from '../Resume.module.scss';

type SkillsBlockProps = {
  title: string;
  description: string;
};

export const SkillsBlock: FunctionComponent<SkillsBlockProps> = ({
  title,
  description,
}) => {
  return (
    <>
      <h3 className={styles.resumeblocktitle}>{title}</h3>
      <p>{description}</p>
    </>
  );
};

type SkillsBlockListProps = {
  data: SkillsData[];
};

type SkillsData = {
  skill: string;
  description: string;
};

export const SkillsBlockList: FunctionComponent<SkillsBlockListProps> = ({
  data,
}) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles.skillsblock}>
            <SkillsBlock title={item.skill} description={item.description} />
          </div>
        );
      })}
    </>
  );
};
