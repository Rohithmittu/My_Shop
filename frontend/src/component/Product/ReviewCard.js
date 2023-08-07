import { Rating } from "@mui/material";
import React from "react";
import profilepng from "../../images/Profile.png"

const ReviewCard = ({ review }) => {
  const options = {
    edit: false,
    color: "red",
    activeColor: "tomato",
    // size: window.innerWidth < 600 ? 20 : 25,
    value: review.rating,
    isHalf: true,
  };

  return (
    <div className="reviewCard">
      <img src={profilepng} alt='User' />
      <p>{review.name}</p>
      <Rating {...options} />
      <span>{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
