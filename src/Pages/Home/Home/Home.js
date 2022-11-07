import React from "react";
import { Link } from "react-router-dom";
import HomeServices from "../../Services/HomeServices";

import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <HomeServices></HomeServices>
      <div className="text-center">
        <Link to="/services">
          <button className="btn btn-primary">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
