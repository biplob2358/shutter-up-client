import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AboutMe from "../../AboutMe/AboutMe";
import HomeServices from "../../Services/HomeServices";

import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <HomeServices></HomeServices>
      <div className="text-center">
        <Link to="/services">
          <button className="btn bg-orange-500 drop-shadow-xl">
            See More{" "}
            <FaArrowAltCircleRight className="ml-2"></FaArrowAltCircleRight>{" "}
          </button>
        </Link>
      </div>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Home;
