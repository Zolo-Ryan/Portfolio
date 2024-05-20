import "./Projects.css";
import img1 from "../../assets/zilo_text_editor_1.png";
import img2 from "../../assets/blog.png";
import img3 from "../../assets/weather.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="grid">
        <div className="item">
          <a href="https://github.com/Zolo-Ryan/Zilo" aria-labelledby="person1" target="_blank" rel="noreferrer"></a>
          <img src={img1} alt="Loading..." />
          <div className="item__overlay">
            <h3 aria-hidden="true">
              Zilo - Text editor
            </h3>
            <div className="item__body">
              <p>
                A text editor in made entirely in C. Simple text editor to view, update, create and save files.
                Additonal features of search, gotoline and clipboard are also available.
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <a href="https://blogify-88v0.onrender.com/" aria-labelledby="person2" target="_blank" rel="noreferrer"></a>
          <img
            src={img2}
            alt="Loading...."
          />
          <div className="item__overlay">
            <h3 aria-hidden="true">
              Blogify - Blogging application
            </h3>
            <div className="item__body">
              <p>
                A blogging application to create, modify and update posts.
                There is also a login feature using jwt token for stateless authentication.
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <a href="https://github.com/Zolo-Ryan/Weather" aria-labelledby="person3"></a>
          <img
            src={img3}
            alt="Loading..."
          />
          <div className="item__overlay">
            <h3 aria-hidden="true">
              Weather Application
            </h3>
            <div className="item__body">
              <p>
                A weather application build by our team as a 
                college project. It shows realtime weather of next 30 days
                for the region of Thanesar, Kurukshetra.
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <a href="#0" aria-labelledby="person4"></a>
          <img
            src="https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt=""
          />
          <div className="item__overlay">
            <h3 aria-hidden="true">
                Open source contributor - Digitomize 
            </h3>
            <div className="item__body">
              <p>
                Contributed to a well known open source project - Digitomize
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
