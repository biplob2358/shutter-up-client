import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../../assets/Slider/1.jpg";
import img2 from "../../../assets/Slider/2.jpg";
import img3 from "../../../assets/Slider/3.jpg";
import img4 from "../../../assets/Slider/4.jpg";

const Slider = () => {
  return (
    <div className="mb-4 mt-4 mx-8 ">
      <div className="carousel  w-full rounded-md  ">
        <div
          id="item1"
          className="carousel-item w-full grid justify-items-center items-center"
        >
          <img src={img2} className="w-full " alt="" />
          <div className="absolute text-center">
            <p className="lg:text-6xl sm:text-xl font-bold text-base-200  underline">
              Capture <br /> Your Moment
            </p>
            <button className="btn text-bold bg-orange-600 mt-4">
              Explore More{" "}
              <span className="ml-2">
                <FaArrowRight></FaArrowRight>
              </span>
            </button>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full ">
          <img src={img1} className="w-full" alt="img1" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={img3} className="w-full " alt="" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={img4} className="w-full" alt="" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Slider;
