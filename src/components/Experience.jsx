const Experience = () => {
  return (
    <section className="experience_section autoDisplay" id="experience">
      <div className="container">
        <div className="experience_inner">
          <div className="top_section">
            <p className="tagline">EXPERIENCE</p>
            <h2 className="heading">Experience & learning journey</h2>
            <p className="subtext">
              Hands-on frontend experience focused on design-to-code workflows,
              with continuous learning in modern frameworks.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline_item">
              <span className="time">2024 – Present</span>
              <h4 className="role">Frontend Developer</h4>
              <p className="company">Ngage Studios</p>

              <ul className="points">
                <li>
                  Translate Figma designs into pixel-perfect, production-ready
                  HTML and SCSS.
                </li>
                <li>
                  Develop fully responsive layouts optimized for all screen
                  sizes and devices.
                </li>
                <li>
                  Enhance user experience through hover effects, transitions,
                  and interactive UI elements.
                </li>
                <li>
                  Collaborate closely with designers to ensure visual
                  consistency and design accuracy.
                </li>
              </ul>
            </div>

            <div className="timeline_item">
              <span className="time">Jan 2024 – Jul 2024</span>
              <h4 className="role">Frontend Developer Trainee</h4>
              <p className="company">Ngage Studios</p>

              <ul className="points">
                <li>
                  Developed responsive user interfaces using HTML, CSS (SCSS),
                  and JavaScript.
                </li>
                <li>
                  Gained hands-on experience with PHP and jQuery for dynamic web
                  functionality.
                </li>
                <li>
                  Implemented responsive layouts using CSS Media Queries and
                  modern layout techniques.
                </li>
                <li>
                  Converted real-world UI designs into pixel-perfect, responsive
                  webpages.
                </li>
                <li>
                  Collaborated with design references using Photoshop to ensure
                  accurate visual implementation.
                </li>
              </ul>
            </div>

            <div className="timeline_item">
              <span className="time">May 2022 - June 2022</span>
              <h4 className="role">
                Frontend Intern (Summer Internship) @Tatvasoft
              </h4>
              <p className="company">Book-e-Sell (E-commerce Platform)</p>

              <ul className="points">
                <li>Worked on product listing pages and UI components</li>
                <li>Integrated frontend screens with backend APIs</li>
                <li>Built reusable UI sections for scalability</li>
                <li>Improved overall UI consistency and usability</li>
              </ul>
            </div>

            <div className="timeline_item highlight">
              <span className="time">Ongoing</span>
              <h4 className="role">React Learning & Projects</h4>
              <p className="company">Self-Learning</p>

              <ul className="points">
                <li>Building React projects alongside professional work</li>
                <li>
                  Learning component-based architecture and state management
                </li>
                <li>Practicing props, hooks, and reusable components</li>
                <li>
                  Gradually converting static UI sections into React components
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
