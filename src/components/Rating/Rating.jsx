import React from "react";
import EmptyStar from "../../Assets/EmptyStar";
import FilledStar from "../../Assets/FilledStar";

const StarRating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((rating, index) => (
        <img
          key={index}
          src={index < rating ? FilledStar : EmptyStar}
          alt={index < rating ? "filled star" : "empty star"}
        />
      ))}
    </div>
  );
};

export default StarRating;
