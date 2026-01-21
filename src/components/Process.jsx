const Process = () => {
  return (
    <section className="process_section autoDisplay" id="process">
      <div className="container">
        <div className="process_section_inner">
          <div className="top_section">
            <p className="tagline">PROCESS</p>
            <h2 className="heading">How I build modern web interfaces</h2>
            <p className="subtext">
              A structured yet flexible approach focused on usability,
              performance, and clean architecture.
            </p>
          </div>

          <div className="bottom_section">
            <div className="process_card">
              <span className="step">01</span>
              <h4 className="title">Figma to Pixel-Perfect UI</h4>
              <p className="description">
                Convert Figma designs into precise HTML and SCSS layouts,
                maintaining spacing, typography, colors, and visual hierarchy
                across screen sizes.
              </p>
            </div>

            <div className="process_card">
              <span className="step">02</span>
              <h4 className="title">Clean & Scalable Markup</h4>
              <p className="description">
                Build semantic, reusable UI structures with structured SCSS that
                scales well for large design systems and component reuse.
              </p>
            </div>

            <div className="process_card">
              <span className="step">03</span>
              <h4 className="title">UX & Interaction Polish</h4>
              <p className="description">
                Enhance user experience through smooth animations, hover
                effects, responsiveness, and accessibility-focused UI
                improvements.
              </p>
            </div>

            <div className="process_card">
              <span className="step">04</span>
              <h4 className="title">Refine & Optimize</h4>
              <p className="description">
                Improve performance, responsiveness, and UX through testing,
                iteration, and attention to fine details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
