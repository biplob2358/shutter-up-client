import React from "react";
import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
  const { _id, name, price, img, description } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mb-4 mx-auto">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 100)}...</p>

          <div className="flex justify-between">
            <p>Price:{price}</p>
          </div>
          <div className="card-actions">
            <Link to={`/services/${_id}`}>
              {" "}
              <button className="btn bg-orange-500">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
