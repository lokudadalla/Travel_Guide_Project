import React from "react";
import "../css/ReviewCard.css";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="profile">
        <div className="avatar">{review.name[0]}</div>
        <div>
          <h4>{review.name}</h4>
          <p>{review.location}</p>
        </div>
      </div>
      <div className="details">
        <h5>{review.trip}</h5>
        <div className="rating">
          {"⭐".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
        </div>
        <p>{review.feedback}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
