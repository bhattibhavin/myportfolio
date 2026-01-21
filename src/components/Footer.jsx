const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="footer_section_inner">

          <div className="footer_left">
            <h4 className="name">Bhavin Bhatti</h4>
            <p className="role">Frontend Developer</p>
          </div>

          <div className="footer_center">
            <p>
              Built with a focus on pixel-perfect UI, clean code,
              and continuous learning.
            </p>
          </div>

          <div className="footer_right">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

        <div className="footer_bottom">
          <p>© {new Date().getFullYear()} Bhavin Bhatti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
