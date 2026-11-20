import CTA from "../components/CTA";
import "../styles/Services.css";

export default function Services() {

  const services = [
  {
    id: 1,
    name: 'Brand Identity',
    description: 'Building distinctive brand identities through logos, typography, colors and visual systems.'
  },
  {
    id: 2,
    name: 'Graphic Design',
    description: 'Creating visual materials that communicate ideas and strengthen brand presence.'
  },
  {
    id: 3,
    name: 'Digital & Social Media',
    description: 'Designing engaging digital visuals and social media content for brands.'
  },
  {
    id: 4,
    name: 'Print & Packaging',
    description: 'Designing printed materials and packaging that bring brands to life.'
  }
];

  return (
    <main>
      <section className="services-hero">
        <p className="section-label">WHAT WE DO</p>

        <h1>
          Creative services.<br />
          Thoughtful design.
        </h1>

        <p className="services-intro">
           We help brands build their identity and communicate through meaningful visuals and creative solutions.
        </p>
      </section>

      <section className="services-list">
        {services.map(service => (
          <div className="service-item" key={service.id}>
            <span>0{service.id}</span>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <CTA />
    </main>
  )
}
