import styles from '/styles/About.module.scss';

export default function About() {
  return (
    <div className={styles['about-outer']}>
      <div className={styles['about-wrapper']}>
        <section id="about" className={styles.about}>
          <div className={styles.cardWrapper}>
            <div className={styles.sticker}>About Me</div>
            <div className={styles.card}>
              <p className={styles.p}>
                Hi! I'm Julieta. 
                I'm a Full Stack Developer with a strong focus on frontend. Naturally curious, creative, and passionate about technology and lifelong learning              </p>
              <p className={styles.p}>
                I enjoy tackling challenges, writing clean and scalable code, and always strive to follow best practices.
                I love creating ideas that become memorable user experiences.              </p>
              <p className={styles.quote}>
                I love writing code — and I do it in verses of logic and creativity. 🌸              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
