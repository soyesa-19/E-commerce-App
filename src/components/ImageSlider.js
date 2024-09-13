import { useEffect, useState } from "react";
import Img from "../assets/images/img.jpeg";
import Img2 from "../assets/images/image2.jpeg";
import Img3 from "../assets/images/image3.jpeg";
import Img4 from "../assets/images/image4.jpeg";
import Img5 from "../assets/images/image5.jpeg";

const images = [Img, Img2, Img3, Img4, Img5];

const ImageSlider = () => {
  const [curr, setCurr] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurr((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    if (curr == 0) {
      return setCurr((prev) => images.length - 1);
    }
    setCurr((prev) => prev - 1);
  };

  return (
    <div className=" relative">
      <div className="h-[600px] overflow-hidden">
        <img
          src={images[curr]}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex felx-row gap-4 transform -translate-x-1/2 absolute bottom-20 right-16 z-40 w-[150px] h-12">
        <button
          onClick={handlePrev}
          className="w-full bg-brandGray3 rounded-md"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="w-full bg-brandPrimary rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
