import styles from '../styles/Contact.module.scss';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [showThankYou, setShowThankYou] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      'service_6s7eyff',
      'template_7f74i3f',
      form.current,
      '_UTNQod83WRI80LSm'
    )
      .then(() => {
        setShowThankYou(true);
        form.current?.reset();

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });

        setTimeout(() => setShowThankYou(false), 4000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.particlesWrapper}>
        <ParticlesBackground />
      </div>

      {showThankYou && (
        <div className={styles.thankYouMessage}>
          <span className={styles.muffinSticker}>🧁</span>
          <p>Message sent! Thanks for reaching out — here’s a muffin for you!</p>
        </div>
      )}

      <div className={styles.speechBubble}>Let’s talk! 👩‍💻</div>

      <form ref={form} className={styles.form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" className={styles.input} required />
        <input type="email" name="user_email" placeholder="Your Email" className={styles.input} required />
        <textarea name="message" placeholder="Your Message" className={styles.textarea} required></textarea>
        <button type="submit" className={styles.button}>Send</button>
      </form>

      <div className={styles.socialIcons}>
        <a href="https://github.com/FJulieta" target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/faderjulieta/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
        <a href="https://wa.me/5492612155830" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={styles.icon} />
        </a>
        <a href="mailto:faderjulieta430@gmail.com">
          <FaEnvelope className={styles.icon} />
        </a>
      </div>
    </section>
  );
}
