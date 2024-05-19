import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ImageGallery from "./components/ImageGallery/RevolvingImageGallery";
import Main from "./components/Main/Main";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (
    <div>
      <div className="parent"></div>
      <div className="parent-root">
        <Navbar />
        <Main />
        <Introduction />
      </div>
    </div>
  );
}

export default App;
