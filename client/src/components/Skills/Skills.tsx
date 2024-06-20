import "./Skills.css";
import { skillSet } from "./skillsData";

const Skills = () => {
  return (
    <div className="skills-parent">
      <h1>My Skills</h1>
      <div className="skills" id="skills">
        {skillSet.map((item, i) => {
          return (
            <div className="skillset" key={i}>
              <div className="heading">
                <img src={item.parentImage} alt="Coding" className="coding" />
                <span className="content-skills">{item.name}</span>
              </div>
              <div className="skill-images">
                {item.images.map((val, i) => {
                  return (
                    <img
                      src={val.image}
                      alt="Loading"
                      key={i}
                      className={val.className}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
