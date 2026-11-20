import CTA from "../components/CTA"
import "../styles/About.css"

export default function About() {
  return (
    <main>
      <section className="about-hero">
        <p className="section-label">ABOUT THE STUDIO</p>

        <h1>
          We believe good design<br />
          starts with a good idea.
        </h1>

        <p className="about-intro">
          Modern Studio is a creative design studio focused on building meaningful visual identities and helping brands express who they are.
        </p>
      </section>

      <section className="about-approach">
        <div className="approach-heading">
          <p className="scetion-label">OUR APPROACH</p>
          <h2>Design with purpose.<br />Create with intention.</h2>
        </div>

        <div className="approach-principles">
          <div>
            <span>01</span>
            <h3>Understand</h3>
            <p>We start by understanding the brand, its goals and the people it wants to reach.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Explore</h3>
            <p>We explore ideas and visual directions to find the right way to express each brand.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Create</h3>
            <p>We turn the chosen direction into thoughtful visuals that feel clear and consistent.</p>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
