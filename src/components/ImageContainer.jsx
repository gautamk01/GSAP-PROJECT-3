import { useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

const ImageContainer = ({ ref, ...props }) => {
  const images = [
    "/img-1.jpg",
    "/img-2.jpeg",
    "/img-3.jpg",
    "/img-4.jpg",
    "/img-5.jpg",
    "/img-6.jpg",
    "/img-7.jpg",
    "/img-8.jpg",
    "/img-10.png",
  ];

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
