import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ServicesDetails = () => {
  const serviceDetails = useLoaderData();
  const { name, price, rating, img, description } = serviceDetails;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl my-4">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>

          <p className="font-bold">Price:{price}BDT</p>

          <p className="flex font-bold">
            <FaStar className="mt-1 mr-2 text-yellow-500"></FaStar> Rating:
            {rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
