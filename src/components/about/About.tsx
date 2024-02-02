import React from 'react';
import styles from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../button/Button';
import AnimatedAvatar from '../avatar/AnimatedAvatar';
import { aboutData } from './AboutData';

export const About = () => {
  const { name, email, phoneNumber, jobTitle, description, socialLinks } = aboutData;
  return (
    <div id="About" className={styles.aboutsection}>
      <div className={styles.avatarcontainer}>
        <AnimatedAvatar />
        <Button
          text="Contact Me"
          color="secondary"
          size="large"
          action={() => {
            window.location.href = `mailto:${email}`;
          }}
        />
        <div className={styles.contactemail}>{email}</div>

        <div className={styles.contactnumber}>{phoneNumber}</div>
      </div>
      <div className={styles.aboutinfocontainer}>
        <h1 className={styles.aboutheadline}>{name}</h1>
        <h3 className={styles.abouttitle}>{jobTitle}</h3>
        <p className={styles.aboutparagraph}>{description}</p>
        <div className={styles.sociallinkscontainer}>
          {socialLinks.map((item, index) => {
            return (
              <a key={index} className={styles.aboutlink} href={item.url}>
                <FontAwesomeIcon className={styles.socialicon} icon={item.icon} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
