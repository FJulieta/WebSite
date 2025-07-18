import styles from '../styles/Projects.module.scss';
import Marquee from './TechMarquee';

export default function Projects() {
  const projectList = [
    {
      title: 'Postita App',
      description: 'Sticky notes app made with React, Next.js and Sass.',
      tech: ['React', 'Next.js', 'Sass']
    },
    {
      title: 'QR Pet Tags',
      description: 'QR code system for pet identification and recovery.',
      tech: ['Node.js', 'NestJS', 'PostgreSQL']
    },
    {
      title: 'Another',
      description: '...',
      tech: ['TypeScript', 'Framer Motion', 'Next.js']
    },
     {
      title: 'Another One',
      description: '...',
      tech: ['TypeScript', 'Framer Motion', 'Next.js']
    },
     {
      title: 'In Progress',
      description: '...',
      tech: ['TypeScript', 'Framer Motion', 'Next.js']
    },
     {
      title: 'Another',
      description: '...',
      tech: ['TypeScript', 'Framer Motion', 'Next.js']
    },
     {
      title: 'Lumenbyte Web',
      description: 'Creative portfolio website for tech innovation.',
      tech: ['TypeScript', 'Framer Motion', 'Next.js']
    }
  ];

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>My Projects</h2>

      <div className={styles.projectsCarousel}>
        {projectList.map((project, index) => (
          <div key={index} className={styles.card}>
            <h3>{project.title}</h3>
            <div className={styles.description}>
              <p>{project.description}</p>
              <span>{project.tech.join(', ')}</span>
            </div>
          </div>
        ))}
      </div>

      <Marquee />
    </section>
  );
}
