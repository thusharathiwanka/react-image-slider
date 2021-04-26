import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  console.log(slides);
  return (
    <section>
      <FaArrowCircleLeft />
      <FaArrowCircleRight />
      {slides.map((img, index) => {
        return <img src={img.imageSrc} alt={`mclaren-${index}`} />;
      })}
    </section>
  );
};

export default Slider;
