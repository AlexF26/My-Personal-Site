import React from 'react';
import styles from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faLinkedin,
  faBehanceSquare,
  faDribbbleSquare,
} from '@fortawesome/free-brands-svg-icons';
import Button from '../button/Button';
import AnimatedAvatar from '../avatar/AnimatedAvatar';

function About() {
  return (
    <div id="About" className={styles.aboutsection}>
      <div className={styles.avatarcontainer}>
        <AnimatedAvatar />
        <Button
          text="Contact Me"
          color="secondary"
          size="large"
          action={() => {
            window.location.href = 'mailto:alex.feller26@gmail.com';
          }}
        />
        <div className={styles.contactemail}>alex.feller26@gmail.com</div>

        <div className={styles.contactnumber}>757-374-5530</div>
      </div>
      <div className={styles.aboutinfocontainer}>
        <h1 className={styles.aboutheadline}>Alex Feller</h1>
        <h3 className={styles.abouttitle}>
          Visual Designer &amp; Front End Developer
        </h3>
        <p className={styles.aboutparagraph}>
          I am currently a visual designer and front-end developer from Virginia with
          5 years of experience working on b2b experiences. I have a passion for all
          things design and development! I enjoy solving complex problems and putting
          user experience front and center of all my solutions. Creating prototypes
          and getting user feedback to make meaningful change is what I strive to
          accomplish daily. I also enjoy developing and bringing designs to life
          whether it's creating components or complete experiences.
        </p>
        <div className={styles.sociallinkscontainer}>
          <a
            className={styles.aboutlink}
            href="https://www.linkedin.com/in/aef2662/"
          >
            <FontAwesomeIcon className={styles.socialicon} icon={faLinkedin} />
          </a>
          <a className={styles.aboutlink} href="https://www.behance.net/alexfeller1">
            <FontAwesomeIcon className={styles.socialicon} icon={faBehanceSquare} />
          </a>
          <a className={styles.aboutlink} href="https://github.com/AlexF26">
            <FontAwesomeIcon className={styles.socialicon} icon={faGithubSquare} />
          </a>
          <a className={styles.aboutlink} href="https://dribbble.com/AEF2662">
            <FontAwesomeIcon className={styles.socialicon} icon={faDribbbleSquare} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
