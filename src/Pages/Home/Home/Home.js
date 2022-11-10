import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

import AboutMe from "../../AboutMe/AboutMe";
import LatestWork from "../../AboutMe/LatestWork/LatestWork";
import HomeServices from "../../Services/HomeServices";

import Slider from "../Slider/Slider";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Slider></Slider>
      <HomeServices></HomeServices>
      <div className="text-center">
        <Link to="/services">
          <button className="btn bg-orange-500 drop-shadow-xl">
            See All{" "}
            <FaArrowAltCircleRight className="ml-2"></FaArrowAltCircleRight>{" "}
          </button>
        </Link>
      </div>
      <AboutMe></AboutMe>
      <LatestWork></LatestWork>
    </div>
  );
};

export default Home;
