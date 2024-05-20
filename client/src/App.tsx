import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ImageGallery from "./components/ImageGallery/RevolvingImageGallery";
import Main from "./components/Main/Main";
import Introduction from "./components/Introduction/Introduction";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <div className="first"></div>
      <div className="second" id="home">
        <Navbar />
        <Main />
        <Introduction />
        <hr />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
