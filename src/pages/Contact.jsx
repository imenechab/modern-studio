import "../styles/Contact.css";

export default function Contact() {
  return (
    <main>
      <section className="contact-hero">
        <p className="section-label">GET IN TOUCH</p>

        <h1>
          Have a project<br />
          in mind<span>.</span>
        </h1>

        <p className="contact-intro">
          Have an idea, a question, or a project you'd like to discuss? We'd love to hear from you.
        </p>
      </section>

      <section className="contact-details">
        <div>
          <p className="section-label">LET'S TALK</p>
          <a href="mailto:hello@modernstudio.com">
            hello@modernstudio.com ↗
          </a>
        </div>

        <div>
          <p className="section-label">FOLLOW OUR WORK</p>
          <a href="#" target="_blank" rel="norefferer">
            Instagram ↗
          </a>
        </div>
      </section>
    </main>
  )
}
