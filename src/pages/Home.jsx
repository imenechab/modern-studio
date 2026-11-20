import { Link } from "react-router-dom";
import heroBranding from "../assets/hero-branding.png";
import maisonElon from "../assets/maison-elan.png";
import formaStudio from "../assets/forma-studio.png";
import "../styles/Home.css"

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">INDEPENDENT CREATIVE STUDIO</p>

          <h1>
            We create visuals
            <br />
            that make brands
            <br />
            <span>stand out.</span>
          </h1>

          <p className="hero-description">
            We build distinctive brand identities and digital experiences
            that connect businesses with their audiences.
          </p>

          <Link to="/projects" className="hero-button">
            Explore our work <span>↗</span>
          </Link>
        </div>

        <div className="hero-image">
          <img src={heroBranding} alt="Modern Studion brand identity" />
        </div>
      </section>


      <section className="studio-intro">
        <div className="intro-label">
          <span>01 / WHO WE ARE</span>
        </div>

        <div className="intro-content">
          <h2>
            Good design doesn't just look good.
            <span> It makes people feel something.</span>
          </h2>

          <div className="intro-bottom">
            <p>
              We are an independent creative studio shaping ideas into meaningful visual identities. From the first concept to the final detail, we create design that gives brands a voice.
            </p>

            <Link to="/about" className="text-link">
              More about us <span>↗</span>
            </Link>
          </div>
        </div>
      </section>


      <section className="services-preview">
        <div className="services-heading">
          <span>02 / WHAT WE DO</span>
          <h2>Creative thinking.<br />Meaningful design.</h2>
          <p>
            We bring ideas to life through thoughtful design and purposeful visual communication.
          </p>
          <Link to="/services" className="text-link">
            Explore all services <span>↗</span>
          </Link>
        </div>

        <div className="home-services-list">
          <div className="home-service-item">
            <span>01</span>
            <h3>Brand Identity</h3>
            <span>↗</span>
          </div>

          <div className="home-service-item">
            <span>02</span>
            <h3>Graphic Design</h3>
            <span>↗</span>
          </div>

          <div className="home-service-item">
            <span>03</span>
            <h3>Digital & Social Media</h3>
            <span>↗</span>
          </div>

          <div className="home-service-item">
            <span>04</span>
            <h3>Print & Packaging</h3>
            <span>↗</span>
          </div>
        </div>
      </section>

      <section className="projects-preview">
        <div className="home-projects-heading">
          <div>
            <span>03 / SELECTED WORK</span>
            <h2>A selection of<br />what we create.</h2>
          </div>

          <Link to="/projects" className="text-link">
            View all projects <span>↗</span>
          </Link>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={maisonElon} alt="Brand identity project" />
            </div>
            <div className="project-info">
              <h3>Maison Elan</h3>
              <span>Brand Identity · Packaging</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={formaStudio} alt="Visual identity project" />
            </div>
            <div className="project-info">
              <h3>Forma Studio</h3>
              <span>Art Direction · Graphic Design</span>
            </div>
          </div>
        </div>
      </section>


      <section className="contact-cta">
        <span>04 / HAVE A PROJECT IN MIND?</span>

        <h2>
          Let's create
          <br />
          something <span>meaningful.</span>
        </h2>

        <p>
          Have an idea you'd like to bring to life? We'd love to hear about it.
        </p>

        <Link to="/contact" className="cta-button">
          Let's talk <span>↗</span>
        </Link>
      </section>
    </main>
  )
}
