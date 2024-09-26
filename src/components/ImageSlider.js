import { useEffect, useState } from "react";
import { Carousel } from "antd";
import Img from "../assets/images/img.jpeg";
import Img2 from "../assets/images/image2.jpeg";
import Img3 from "../assets/images/image3.jpeg";
import Img4 from "../assets/images/image4.jpeg";
import Img5 from "../assets/images/image5.jpeg";

const images = [Img, Img2, Img3, Img4, Img5];

const ImageSlider = () => {
  return (
    <Carousel autoplay arrows fade>
      {images.map((image) => {
        return (
          <div className="h-[600px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="image"
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
