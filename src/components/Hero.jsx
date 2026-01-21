import image from "../../public/Bhavin.jpg";

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_section_inner">
          <div className="contact_link_section">
            <a
              className="social_link"
              href="https://www.linkedin.com/in/bhavin-bhatti-3889a1245/"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg
                class="social_icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="4"
                  stroke="currentColor"
                  stroke-width="2.2"
                />
                <line
                  x1="7"
                  y1="10"
                  x2="7"
                  y2="17"
                  stroke="currentColor"
                  stroke-width="2.2"
                  stroke-linecap="round"
                />
                <circle cx="7" cy="7" r="1.2" fill="currentColor" />
                <path
                  d="M11 17V12.5C11 11.1 12.1 10 13.5 10C14.9 10 16 11.1 16 12.5V17"
                  stroke="currentColor"
                  stroke-width="2.2"
                  stroke-linecap="round"
                />
              </svg>
            </a>

            <a
              className="social_link"
              href="https://github.com/bhattibhavin"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg
                class="social_icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2
       C6.48 2 2 6.58 2 12.24
       C2 16.74 4.87 20.53 8.84 21.9
       C9.34 22.0 9.5 21.7 9.5 21.45
       V19.2
       C6.73 19.85 6.15 17.94 6.15 17.94
       C5.7 16.8 5.03 16.5 5.03 16.5
       C4.13 15.85 5.1 15.87 5.1 15.87
       C6.1 15.95 6.63 16.93 6.63 16.93
       C7.52 18.48 8.97 18.03 9.54 17.76
       C9.63 17.06 9.89 16.58 10.18 16.3
       C7.98 16.02 5.66 15.18 5.66 11.7
       C5.66 10.7 6.01 9.88 6.59 9.22
       C6.5 8.94 6.2 7.86 6.68 6.48
       C6.68 6.48 7.46 6.23 9.5 7.62
       C10.25 7.4 11.12 7.3 12 7.3
       C12.88 7.3 13.75 7.4 14.5 7.62
       C16.54 6.23 17.32 6.48 17.32 6.48
       C17.8 7.86 17.5 8.94 17.41 9.22
       C17.99 9.88 18.34 10.7 18.34 11.7
       C18.34 15.19 16.01 16.01 13.8 16.28
       C14.18 16.62 14.5 17.29 14.5 18.3
       V21.45
       C14.5 21.7 14.66 22.01 15.17 21.9
       C19.13 20.53 22 16.74 22 12.24
       C22 6.58 17.52 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              className="social_link"
              href="mailto:bhavinbhatti098@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <svg
                class="social_icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="4"
                  stroke="currentColor"
                  stroke-width="2.2"
                />
                <path
                  d="M3 6L12 13L21 6"
                  stroke="currentColor"
                  stroke-width="2.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="hero_card">
            <div className="hero_left">
              <div className="image_section">
                <img src={image} alt="Bhavin" title="Yupp! that's me!" />
              </div>
            </div>
            <div className="hero_right">
              <p className="tagline">FRONTEND DEVELOPER / UI DEVELOPER</p>

              <h1 className="heading">
                I build clean & modern
                <br />
                web experiences
              </h1>

              <div className="content_section">
                <p>
                  <strong>Hi, I’m Bhavin</strong> — a frontend developer
                  passionate about crafting performant, accessible, and
                  thoughtfully designed web experiences.
                </p>
              </div>

              <div className="cta_section">
                <a href="#projects" className="btn btn_primary">
                  View Projects
                </a>
                <a href="#contact" className="btn btn_secondary">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
