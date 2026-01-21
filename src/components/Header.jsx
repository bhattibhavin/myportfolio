const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">

          <div className="header_logo">
            my<span>portfolio</span>
          </div>

          <nav className="header_nav">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
