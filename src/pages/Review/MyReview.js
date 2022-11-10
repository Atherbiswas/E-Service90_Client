import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../Hooks/UseTitle";
import MyAllReview from "./MyAllReview";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("E-Service90/MyReviews");

  useEffect(() => {
    fetch(
      `https://clinimedicare-server.vercel.app/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this review");
    if (proceed) {
      fetch(`https://clinimedicare-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Review deleted successfully");
            const remaining = reviews.filter((rev) => rev._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-2xl text-center text-white">
        You had given {reviews.length} reviews.
      </h2>

      <div className="overflow-x-auto w-full mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Service name</th>
              <th>Rating</th>
              <th>Email</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <MyAllReview
                key={review._id}
                review={review}
                handleDelete={handleDelete}
              ></MyAllReview>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
