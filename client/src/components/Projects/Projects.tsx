import "./Projects.css";
import { projects } from "./projectsData";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>My Projects/Open source contributions</h1>
      <div className="flexy">
        {projects.map((val, i) => {
          return (
            <div className="item" key={i}>
              <a
                href={val.link}
                aria-labelledby="project1"
                target="_blank"
                rel="noreferrer"
              ></a>
              <img
                src={val.image}
                alt="Loading..."
                style={{ objectPosition: val.objectPosition }}
              />
              <div className="item__overlay">
                <h3 aria-hidden="true">{val.name}</h3>
                <div className="item__body">
                  <p>{val.overlay}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
