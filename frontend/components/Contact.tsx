import styles from '../styles/Contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <p>If you'd like to work with me or have any questions, feel free to reach out!</p>
      <a
        //href="https://api.whatsapp.com/send?phone=542629802612&text=Hi%20Julieta!%20I'd%20like%20to%20get%20in%20touch%20with%20you!"
        target="_blank"
        rel="noopener noreferrer"
      >
        Message me on WhatsApp
      </a>
    </section>
  );
}
