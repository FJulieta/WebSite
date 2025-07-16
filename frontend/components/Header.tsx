'use client';

import { Link } from 'react-scroll';
import styles from '/styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
