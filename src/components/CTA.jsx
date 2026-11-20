import { Link } from 'react-router-dom';
import '../styles/CTA.css';

export default function CTA() {
  return (
    <section className="cta">
      <p>HAVE A PROJECT IN MIND?</p>
      <h2>Let's create something great together.</h2>
      <Link to="/contact">Let's talk ↗</Link>
    </section>
  )
}
