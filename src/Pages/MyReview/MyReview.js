import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewDetails from "./MyReviewDetails";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  console.log(myReviews);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);
  return (
    <div className=" container">
      <h2 className="text-center mb-4 text-4xl font-bold text-orange-500  underline">
        My total Reviews :{myReviews.length}
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {myReviews.map((myReview) => (
          <MyReviewDetails
            key={myReview._id}
            myReview={myReview}
          ></MyReviewDetails>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
