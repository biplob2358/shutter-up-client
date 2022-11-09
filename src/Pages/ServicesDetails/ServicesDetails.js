import React, { useContext } from "react";

import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServicesDetails = () => {
  const { user } = useContext(AuthContext);
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

      <h2 className="text-center text-4xl text-sky-600 underline"> Reviews</h2>
      <div className="grid grid-cols-2 text-center border">
        <dv className="border">
          <p>All reviews</p>
          <p>All reviews</p>
          <p>All reviews</p>
          <p>All reviews</p>
          <p>All reviews</p>
          <p>All reviews</p>
          <p>All reviews</p>
          <p>All reviews</p>
        </dv>
        <dv>
          {user?.uid ? (
            <div>
              <form className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    readOnly
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="Rating (1-5)"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    className="textarea textarea-primary"
                    name="description"
                    placeholder="Description"
                    required
                  ></textarea>
                </div>

                <div className="form-control mt-6 w-24 mx-auto ">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Add Review"
                  />
                </div>
              </form>
            </div>
          ) : (
            <div className="flex h-full justify-center items-center">
              <div>
                <Link to="/login">
                  <button className="btn bg-orange-600">Please Login</button>
                </Link>
              </div>
            </div>
          )}
        </dv>
      </div>
    </div>
  );
};

export default ServicesDetails;
