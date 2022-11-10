import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewDetails from "./MyReviewDetails";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useTitle("My Reviews");

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You sure,Want delete you review?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted Successfully");
            const remaining = myReviews.filter((myRev) => myRev._id !== id);
            setMyReviews(remaining);
          }
        });
    }
  };
  return (
    <div className=" container mx-auto">
      {myReviews.length > 0 ? (
        <>
          <h2 className="text-center mb-4 text-4xl font-bold text-orange-500  underline">
            My total Reviews :{myReviews.length}
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {myReviews.map((myReview) => (
              <MyReviewDetails
                key={myReview._id}
                myReview={myReview}
                handleDelete={handleDelete}
              ></MyReviewDetails>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="grid min-h-screen mx-auto text-orange-500 w-full content-center justify-center">
            <h2 className="text-5xl font-bold text-center">
              No reviews were added{" "}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default MyReview;
