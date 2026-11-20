import maisonElan from "../assets/maison-elan.png";
import formaStudio from "../assets/forma-studio.png";
import "../styles/Projects.css";
import { useState } from "react";
import CTA from "../components/CTA";

export default function Projects() {

  const projects = [
    {
      id: 1,
      name: 'Maison Elan',
      categories: ['Branding', 'Packaging'],
      services: 'Brand Identity · Packaging',
      image: maisonElan,
    },
    {
      id: 2,
      name: 'Forma Studio',
      categories: ['Graphic Design'],
      services: 'Art Direction · Graphic Design',
      image: formaStudio,
    },
  ];

  const categories = ['All', 'Branding', 'Graphic Design', 'Packaging'];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.categories.includes(activeCategory)
  );

  return (
    <main>
      <section className="projects-section">

        <div className="all-projects-heading">
          <p className="section-label">OUR WORK</p>
          <h1>Selected projects<span>.</span></h1>
          <p>A selection of identities and visuals created with purpose.</p>
        </div>

        <div className="project-filters">
          {categories.map(category => (
            <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? 'active' : ''}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="all-projects-grid">
          {filteredProjects.map(project => (
            <div className="all-projects-card" key={project.id}>
              <img src={project.image} alt={project.name} />
              <h2>{project.name}</h2>
              <p>{project.services}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  )
}
