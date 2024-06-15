import "./Skills.css";
import coding from "../../assets/coding.png";
import c_image from "../../assets/c-.png";
import java_image from "../../assets/java.png";
import js_image from "../../assets/java-script.png";
import python_image from "../../assets/python.png";
import bash from "../../assets/gnu-bash.png";
import react_img from "../../assets/library.png";
import express_img from "../../assets/express.png";
import mongo_img from "../../assets/mongodb.png";
import node_img from "../../assets/nodejs.png";
import nest_img from "../../assets/nestjs.png";
import prisma_img from "../../assets/Prisma.png";
import git_img from "../../assets/Git.png";
import post_img from "../../assets/Postman.png";
import docker_img from "../../assets/Docker.png";
import make_img from "../../assets/gnu.png";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skillset">
        <div className="heading">
          <img src={coding} alt="Coding" className="coding" />
          <span className="content-skills">Programming Languages</span>
        </div>
        <div className="skill-images">
          <img src={c_image} alt="C" />
          <img src={java_image} alt="Java" />
          <img src={js_image} alt="Js" />
          <img src={python_image} alt="Python" />
          <img src={bash} alt="Bash" />
        </div>
      </div>
      <div className="skillset">
        <div className="heading">
          <img src={coding} alt="Coding" className="coding" />
          <span className="content-skills">Web Development</span>
        </div>
        <div className="skill-images">
          <img src={mongo_img} alt="Mongodb" />
          <img src={express_img} alt="Expressjs" />
          <img src={react_img} alt="Reactjs" className="bg-white" />
          <img src={node_img} alt="Nodejs" />
          <img src={nest_img} alt="Nestjs" />
        </div>
      </div>
      <div className="skillset">
        <div className="heading">
          <img src={coding} alt="Coding" className="coding" />
          <span className="content-skills">Tools and Technologies</span>
        </div>
        <div className="skill-images">
          <img src={git_img} alt="Git" className="bg-white" />
          <img src={prisma_img} alt="Prisma" className="bg-white" />
          <img src={post_img} alt="Postman" className="bg-white" />
          <img src={docker_img} alt="Docker" className="bg-white" />
          <img src={make_img} alt="Gnu make" className="bg-white" id="projects"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
