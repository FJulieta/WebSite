import Slider from 'react-slick';
import styles from '../styles/Projects.module.scss';

const projects = [
  {
    title: 'Sticky Notes App',
    description: 'A notes app built with React, Next.js and NestJS.',
    image: '/images/notes.png',
    link: 'https://github.com/FJulieta/sticky-notes'
  },
  {
    title: 'QR Code Pet ID',
    description: 'Create scannable QR tags for pets with their contact info.',
    image: '/images/qrcode.png',
    link: 'https://github.com/FJulieta/pet-qr'
  },
  // Agregá más proyectos acá
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
}
