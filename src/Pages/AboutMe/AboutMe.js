import React from "react";
import img from "../../assets/images/photographar.jpeg";

const AboutMe = () => {
  return (
    <div className="mt-10 mb-4">
      <p className="text-4xl font-bold  text-center underline text-sky-500">
        About Me
      </p>

      <div className="hero mt-4 w-4/5 mx-auto bg-sky-100">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="px-8 rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-4xl font-bold">
              Photographer: <span className="text-sky-500">Biplob Ghosh</span>{" "}
            </h1>
            <ul className="gap-2 mt-4">
              <li>➡ Founder and Ceo Shuuter Up</li>
              <li>➡ 5 years Experience</li>
              <li>➡ Wedding Photography Including Pre and Post Wedding</li>
              <li>➡ Cinematography</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
