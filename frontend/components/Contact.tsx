import styles from '../styles/Contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <p>If you'd like to work with me or have any questions, feel free to reach out!</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
      >
        Message me on WhatsApp
      </a>
    </section>
  );
}
