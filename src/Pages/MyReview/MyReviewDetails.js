import React from "react";

const MyReviewDetails = ({ myReview }) => {
  const { serviceName, rating, review } = myReview;
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <p>
            <span className="font-bold">Review:</span> {review}
          </p>
          <p>
            <span className="font-bold">Rating:</span> {rating}
          </p>
          <div className="card-actions justify-between mt-4 ">
            <button className="btn btn-primary">Edit</button>
            <button className="btn bg-red-600">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewDetails;
