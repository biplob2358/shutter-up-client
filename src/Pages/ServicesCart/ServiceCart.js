import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCart = ({ service }) => {
  const { _id, name, price, img, description } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mb-4 mx-auto">
        <figure className="px-10 pt-10">
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} style={{ objectFit: "cover" }} alt="" />
            </PhotoView>
          </PhotoProvider>
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
