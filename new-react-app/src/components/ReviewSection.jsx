
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import "../css/ReviewSection.css";

const ReviewSection = ({ reviews }) => {
  console.log("review", reviews);
  const [filterRating, setFilterRating] = useState(0);

  const filteredReviews = filterRating
    ? reviews.filter((review) => review.rating === filterRating)
    : reviews;

  return (
    <div className="review-section">
      <div className="filters">
        <h3>Ratings</h3>
        <div className="rating-filter">
          {[0, 1, 2, 3, 4, 5].map((star) => (
            <label key={star}>
              <input
                type="radio"
                name="rating"
                value={star}
                onChange={() => setFilterRating(star)}
              />
              {"⭐".repeat(star)} {star === 0 ? "All Ratings" : ""}
            </label>
          ))}
        </div>
      </div>

      <div className="reviews">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review, index) => {
            console.log(`Rendering review with ID: ${review.id}`); // ✅ Debugging
            return <ReviewCard key={`${review.id}-${index}`} review={review} />;
          })
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
