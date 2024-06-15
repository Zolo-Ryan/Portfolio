import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Introduction from "./components/Introduction/Introduction";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <div className="first"></div>
      <div className="second" id="home">
        <Navbar />
        <Main />
        <Introduction />
        <hr />
        <Skills />
        <hr />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
