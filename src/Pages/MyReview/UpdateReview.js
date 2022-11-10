import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const updateReview = useLoaderData();
  const [reviews, setReviews] = useState(updateReview);

  const handleUpdateReview = (event) => {
    event.preventDefault();

    console.log(reviews);
    fetch(`http://localhost:5000/reviews/${updateReview._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Review updated");
        }
      })
      .catch((error) => console.error(error));
  };
  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...reviews };
    console.log(newReview);
    newReview[field] = value;
    setReviews(newReview);
  };

  return (
    <div className="w-1/2 mx-auto bg-sky-100 mt-6 rounded-lg">
      <div>
        <form onSubmit={handleUpdateReview} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={updateReview.serviceName}
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
              onChange={handleInputChange}
              defaultValue={updateReview.rating}
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
              onChange={handleInputChange}
              defaultValue={updateReview.review}
              placeholder="Description"
              required
            ></textarea>
          </div>

          <div className="form-control mt-6 w-32 mx-auto ">
            <input
              className="btn btn-primary"
              type="submit"
              value="Update Review"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
