import React from "react";

import { useLoaderData } from "react-router-dom";

const ServicesDetails = () => {
  const serviceDetails = useLoaderData();
  const { name, price, rating, img, description } = serviceDetails;
  return (
    <div className="mx-20">
      <div className="card w-2/3 mx-auto bg-base-100 shadow-xl my-4 ">
        <figure>
          <img src={img} alt="" />
        </figure>
        <h2 className=" text-3xl font-bold text-center">{name}</h2>
        <div className="card-body text-center">
          <p>{description}</p>
          <p className="font-bold">
            <span className="mr-2">Rating:</span>
            {rating}
          </p>

          <p className="font-bold ">Price:{price}BDT</p>
          {/* <p className="flex font-bold">
            <FaStar className="mt-1 mr-2 text-yellow-500"></FaStar> Rating:
            {rating}
          </p> */}
          <button className="btn bg-orange-500 w-28  mx-auto">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
