import styles from '../styles/Hero.module.scss';

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
        <p className={`${styles.description} ${styles.fadeIn}`}>
          Crafting unique and modern digital experiences.
        </p>
      </div>
    </section>
  );
}
