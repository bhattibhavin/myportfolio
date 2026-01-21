const About = () => {
  return (
    <section className="about_section autoDisplay" id="about">
      <div className="container">
        <div className="about_section_inner">
          <div className="about_card ">
            <div className="about_left">
              <p className="tagline">ABOUT ME</p>

              <h2 className="heading">
                Frontend developer who cares
                <br />
                about details & usability
              </h2>

              <div className="content_section">
                <p>
                  I’m <strong>Bhavin</strong>, a frontend developer with a
                  strong focus on building clean, responsive, and accessible
                  interfaces. I enjoy turning complex ideas into simple, elegant
                  user experiences.
                </p>
              </div>
            </div>

            <div className="about_right">
              <div className="about_item">
                <h4>Experience</h4>
                <p>1.5+ years working with real-world frontend projects</p>
              </div>

              <div className="about_item">
                <h4>Focus</h4>
                <p>React, SCSS, modern UI systems & performance</p>
              </div>

              <div className="about_item">
                <h4>Mindset</h4>
                <p>Clean code, scalable structure, user-first design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
