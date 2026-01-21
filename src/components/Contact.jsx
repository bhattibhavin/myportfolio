const Contact = () => {
  return (
    <section className="contact_section autoDisplay" id="contact">
      <div className="container">
        <div className="contact_section_inner">

          <p className="tagline">CONTACT</p>
          <h2 className="heading">Let’s build something great together</h2>

          <p className="subtext">
            I’m open to frontend roles, internships, and freelance opportunities.
            Feel free to reach out if you’d like to collaborate or discuss a project.
          </p>

          <div className="contact_actions">
            <a href="mailto:yourmail@gmail.com" className="btn primary">
              Email Me
            </a>

            <a href="/resume.pdf" target="_blank" className="btn secondary">
              Download Resume
            </a>
          </div>

          <div className="social_links">
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Twitter">Mail</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
