import styles from '../styles/TechMarquee.module.scss';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNextdotjs, SiNestjs, SiSass } from 'react-icons/si';

export default function Marquee() {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...Array(2)].map((_, index) => (
            <div className={styles.icons} key={index}>
              <FaReact className={styles.icon} />
              <SiTypescript className={styles.icon} />
              <FaNodeJs className={styles.icon} />
              <SiJavascript className={styles.icon} />
              <SiNextdotjs className={styles.icon} />
              <SiNestjs className={styles.icon} />
              <FaGitAlt className={styles.icon} />
              <SiSass className={styles.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
