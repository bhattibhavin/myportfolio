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
            <a href="mailto:workwithbhavin@gmail.com" className="btn primary">
              Email Me
            </a>

            <a href="https://drive.google.com/drive/folders/1_vJvj8yyaydq5pOgB7xxoEqccLSrhwl-?usp=sharing" target="_blank" className="btn secondary">
              View Resume
            </a>
          </div>

          <div className="social_links">
            <a href="https://github.com/bhattibhavin/" aria-label="GitHub">GitHub</a>
            <a href="https://www.linkedin.com/in/bhavin-bhatti-3889a1245/" aria-label="LinkedIn">LinkedIn</a>
            <a href="mailto:workwithbhavin@gmail.com" aria-label="Mail">Mail</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;


