export default function ProjectCard(props) {
  return (
    <div className="project_card">
      <span className="tagline">{props.tagline}</span>
      <h4 className="heading">{props.heading}</h4>
      <div className="content_section">
        <p>
          {props.content}
        </p>
      </div>
      <div className="project_tech">
        {
            props.tech.map((item, index) => (
                <span key={index} className="tech_chip">{item}</span>
            ))
        }
      </div>
    </div>
  );
}
