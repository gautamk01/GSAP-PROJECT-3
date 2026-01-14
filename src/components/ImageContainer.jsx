import { useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { images } from "../data/images";

const ImageContainer = ({ ref, ...props }) => {
  return (
    <div ref={ref} className="images-container">
      {images.map((src, index) => (
        <div key={index} className="img">
          <img
            src={`${import.meta.env.BASE_URL}${src.substring(1)}`}
            alt={`Portfolio image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageContainer;
