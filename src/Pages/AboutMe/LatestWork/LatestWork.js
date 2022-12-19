import React from "react";
import img1 from "../../../assets/work/1.jpg";
import img2 from "../../../assets/work/2.jpg";
import img3 from "../../../assets/work/3.jpeg";

import img5 from "../../../assets/work/5.jpeg";
import img6 from "../../../assets/work/6.jpeg";

const LatestWork = () => {
  return (
    <div className="mt-10 mb-4">
      <p className="lg:text-4xl text-xl font-bold text-center underline text-sky-500 ">
        THE LATEST WORK
      </p>
      <div>
        <div className="hero mt-4 w-3/4 mx-auto flex justify-center gap-4 bg-sky-100 rounded-lg">
          <div>
            <img src={img1} alt="" className="rounded-lg" />
          </div>
          <div>
            <img src={img2} alt="" className="rounded-lg" />
          </div>
        </div>
        <div className="flex mx-auto justify-center w-3/4 bg-sky-100">
          <img className="w-full rounded-lg " src={img3} alt="" />
        </div>
        <div className="hero w-3/4 mx-auto  flex justify-center gap-4 bg-sky-100">
          <div>
            <img src={img5} alt="" className="rounded-lg" />
          </div>
          <div>
            <img src={img6} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
