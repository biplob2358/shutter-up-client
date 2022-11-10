import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SingleReview from "../../SingleReview/SingleReview";

const ServicesDetails = () => {
  const { user } = useContext(AuthContext);
  const serviceDetails = useLoaderData();
  const { _id, name, price, rating, img, description } = serviceDetails;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://shutter-up-server-mu.vercel.app/serviceReviews?service_id=${_id}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const rating = form.rating.value;
    const review = form.review.value;
    const serviceName = name;
    const userName = user?.displayName || "Unregister";
    const email = user?.email || "Unregister";
    const userPhotoUrl = user?.photoURL;

    const date = new Date();

    const reviews = {
      service_id: _id,
      serviceName,
      userName,
      email,
      rating,
      review,
      date,
      userPhotoUrl,
    };
    // console.log(reviews);
    fetch("https://shutter-up-server-mu.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Your review sumbit successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className=" mx-auto ml-8">
      <div className="card  mx-auto bg-base-100 shadow-xl my-4 ">
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
      <h2 className="text-center text-4xl text-sky-600 underline mt-4 mb-4">
        {" "}
        Reviews
      </h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 text-center border  mx-auto ">
        <div className="border w-3/4 mb-4">
          <p>Total reviews:{reviews.length}</p>

          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Rating</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <SingleReview
                    key={review._id}
                    review={review}
                    handleReview={handleReview}
                  ></SingleReview>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-3/4 ">
          <h1 className="font-bold">Write Your Review</h1>
          {user?.uid ? (
            <div>
              <form onSubmit={handleReview} className="card-body ">
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
                    <span className="label-text">Review</span>
                  </label>
                  <textarea
                    className="textarea textarea-primary"
                    name="review"
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
            <div className="flex h-full  justify-center items-center">
              <div>
                <Link to="/login">
                  <button className="btn my-6 bg-orange-600">
                    Please Login
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
