import "./RevolvingImageGallery.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";

const applyStyle = (i: number) => {
    return {
        "transform": `rotateY(calc(${i}* 45deg)) translateZ(400px)`
    }
}
const imagesArray = [img1, img2, img3, img4, img5, img6, img7, img8];
const ImageGallery = () => {
    return (
        <div className="box">
            {
                imagesArray.map((e, i) => {
                    return (
                        <span key={i} style={applyStyle(i + 1)}><img src={e} alt="Loading..." /></span>)
                })}
        </div>
    )
}

export default ImageGallery;