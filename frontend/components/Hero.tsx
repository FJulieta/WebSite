import styles from '../styles/Hero.module.scss';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.card}>
        <h1 className={`${styles.titleGradient} ${styles.slideInLeft}`}>
          Hi, I'm Julieta Fader
        </h1>

        <p className={`${styles.roleGradient} ${styles.slideInRight}`}>
          Full Stack Developer
        </p>

        <div className={`${styles.console} ${styles.fadeIn}`}>
          <span className={styles.dollar}>$</span>{' '}
          <Typewriter
            words={[
              '✨Hello There!🖥️',
              'npm run dev',
              'npm install typescript --save-dev',
              'npm run start:dev',
              'npm i -g @nestjs/cli && nest new my-app',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={55}
            deleteSpeed={30}
            delaySpeed={1200}
          />
        </div>
      </div>
    </section>
  );
}
