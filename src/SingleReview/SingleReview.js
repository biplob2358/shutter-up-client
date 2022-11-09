import React from "react";

const SingleReview = ({ review }) => {
  const { userPhotoUrl, userName, date, rating } = review;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={userPhotoUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{userName}</div>
            <div className="text-sm opacity-50">{date.toLocaleString()}</div>
          </div>
        </div>
      </td>
      <td>{rating}</td>
      <td>{review.review}</td>
    </tr>
  );
};

export default SingleReview;
