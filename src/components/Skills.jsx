import SkillCard from "./SkillCard";
import skillData from "../data/skillData";

const Skills = () => {
  return (
    <section className="skills_section autoDisplay" id="skills">
      <div className="container">
        <div className="skills_section_inner">
          <div className="top_section">
            <p className="tagline">SKILLS</p>
            <h2 className="heading">Tools & technologies I work with</h2>
            <div className="content_section">
              <p>
                Practical tools and technologies used in real projects,
                internships, and production environments.
              </p>
            </div>
          </div>

          <div className="bottom_section">

            {skillData.map((skill, index)=> (
              <SkillCard
              key={index}
              heading = {skill.heading}
              skill = {skill.skill}
              />
            ))}


          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
