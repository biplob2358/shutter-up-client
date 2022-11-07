import React from "react";

const ServiceCart = ({ service }) => {
  const { name, price, img, description } = service;
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
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
