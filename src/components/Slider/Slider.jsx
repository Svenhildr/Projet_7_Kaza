import { useState } from "react";
import arrow from "../../Assets/contentHidden.svg";

const Slider = ({ pictures }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const Previous = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.lenght - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };

  const Next = () => {
    const isLastSlide = currentIndex === pictures.lenght - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };

  // const GoToSlide = slideIndex;

  return (
    <div className="sliderContainer">
      <div
        className="slider"
        style={{ backgroundImage: `url("${pictures[currentIndex]}")` }}
      >
        <div className="arrows">
          <div className="leftArrow">
            <img src={arrow} alt="left Arrow" onClick={Previous} />
          </div>
          <div className="rightArrow">
            <img src={arrow} alt="Right Arrow" onClick={Next} />
          </div>
        </div>
        <div className="sliderCounter">
          <p>
            {currentIndex + 1} / {pictures.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
