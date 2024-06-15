import "./Main.css";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/profile_pic.jpeg";
import linkedIn from "../../assets/icons8-linkedin.svg";
import github from "../../assets/icons8-github.svg";
import twitter from "../../assets/icons8-twitterx.svg";
import hashnode from "../../assets/icons8-hashnode.svg";

const Main = () => {
  return (
    <main className="main">
      <div className="main-child">
        <div className="typewriter">
          <p>Hi There!</p>
          <p>
            I am <span className="special">UTKARSH SWAROOP SHRIVASTAVA</span>
          </p>
          <br />
          <br />
          <br />
          <p className="type special">
            <TypeAnimation
              sequence={[
                "Developer",
                3000,
                "Coder",
                3000,
                "Open Source Contributor",
                3000,
              ]}
              speed={5}
              deletionSpeed={20}
              repeat={Infinity}
            />
          </p>
        </div>
        <div className="card-content">
          <div className="profile-image">
            <img src={profile} alt="Loading..." />
          </div>
          <div className="content">
            <p>Zolo Ryan</p>
            <div className="socials">
              <a href="https://www.linkedin.com/in/utkarsh-swaroop-shrivastava-839898256/">
                <img src={linkedIn} alt="Loading..." />
              </a>
              <a href="https://github.com/Zolo-Ryan">
                <img src={github} alt="Loading..." />
              </a>
              <a href="https://x.com/ImUtkarsh01">
                <img src={twitter} alt="Loading..." />
              </a>
              <a href="https://zolo-ryan.hashnode.dev/">
                <img src={hashnode} alt="Loading..." />
              </a>
            </div>
          </div>
        </div>
        
        <svg className="arrows" id="about">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
    </main>
  );
};

export default Main;
