

export default function skillCard(props) {
  return (
    <div className="skills_card">
      <h4 className="skills_card_title">{props.heading}</h4>
      <div className="skills_list">
        {
            props.skill.map((item, index)=>(
                <span key={index} className="skill_chip">{item}</span>
            ))
        }
      </div>
    </div>
  );
}
