// import React, { useState } from "react";
// import ReviewCard from "./ReviewCard";
// import "../css/ReviewSection.css";

// const reviews = [
//   {
//     id: 1,
//     name: "Vijay Rohilla",
//     location: "Delhi",
//     date: "18 hours ago",
//     trip: "Trip to Sri Lanka",
//     rating: 4,
//     feedback: "Actually a lot of time was spent in car travel. Rest, the hotels and other services were excellent.",
//   },
//   {
//     id: 2,
//     name: "Akash Sachdev",
//     location: "Mumbai",
//     date: "18 hours ago",
//     trip: "Trip to Vietnam",
//     rating: 5,
//     feedback: "Very good experience! Will definitely try again next time.",
//   },
//   {
//     id: 3,
//     name: "Nitin Chaudhary",
//     location: "New Delhi",
//     date: "18 hours ago",
//     trip: "Trip to Bali",
//     rating: 5,
//     feedback: "The trip was well-organized. Everything was perfect from start to finish.",
//   },
//   {
//     id: 4,
//     name: "Sandaru Dimal",
//     location: "Srilanka",
//     date: "12 hours ago",
//     trip: "Trip to Sri-Lanka",
//     rating: 2,
//     feedback: "Actually a lot of time was spent in car travel. Rest, the hotels and other services were excellent.",
//   },
//   {
//     id: 5,
//     name: "Vijay Rohilla",
//     location: "Delhi",
//     date: "18 hours ago",
//     trip: "Trip to Sri Lanka",
//     rating: 3,
//     feedback: "Actually a lot of time was spent in car travel. Rest, the hotels and other services were excellent.",
//   },
//   {
//     id: 6,
//     name: "Vijay Rohilla",
//     location: "Delhi",
//     date: "18 hours ago",
//     trip: "Trip to Sri Lanka",
//     rating: 1,
//     feedback: "Actually a lot of time was spent in car travel. Rest, the hotels and other services were excellent.",
//   },
// ];

// const ReviewSection = () => {
//     const [filterRating, setFilterRating] = useState(0);
  
//     const filteredReviews = filterRating
//       ? reviews.filter((review) => review.rating === filterRating)
//       : reviews;
  
//     return (
//       <div className="review-section">
//         <div className="filters">
//           <h3>Ratings</h3>
//           <div className="rating-filter">
//             <label>
//               <input
//                 type="radio"
//                 name="rating"
//                 value="0"
//                 onChange={() => setFilterRating(0)}
//               />
//               All Ratings
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="rating"
//                 value="1"
//                 onChange={() => setFilterRating(1)}
//               />
//               ⭐ 
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="rating"
//                 value="2"
//                 onChange={() => setFilterRating(2)}
//               />
//               ⭐⭐ 
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="rating"
//                 value="3"
//                 onChange={() => setFilterRating(3)}
//               />
//               ⭐⭐⭐ 
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="rating"
//                 value="4"
//                 onChange={() => setFilterRating(4)}
//               />
//               ⭐⭐⭐⭐ 
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="rating"
//                 value="5"
//                 onChange={() => setFilterRating(5)}
//               />
//               ⭐⭐⭐⭐⭐
//             </label>
//           </div>  
//         </div>
//         <div className="reviews">
//           {filteredReviews.map((review) => (
//             <ReviewCard key={review.id} review={review} />
//           ))}
//         </div>
//       </div>
//     );
//   };
  

// export default ReviewSection;









import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import "../css/ReviewSection.css";
import ReviewInput from "./ReviewInput";



const ReviewSection = ({reviews}) => {
    const [filterRating, setFilterRating] = useState(0);
  
    const filteredReviews = filterRating
      ? reviews.filter((review) => review.rating === filterRating)
      : reviews;
  
    return (
      <div className="review-section">
        <div className="filters">
          <h3>Ratings</h3>
          <div className="rating-filter">
            <label>
              <input
                type="radio"
                name="rating"
                value="0"
                onChange={() => setFilterRating(0)}
              />
              All Ratings
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="1"
                onChange={() => setFilterRating(1)}
              />
              ⭐ 
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="2"
                onChange={() => setFilterRating(2)}
              />
              ⭐⭐ 
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="3"
                onChange={() => setFilterRating(3)}
              />
              ⭐⭐⭐ 
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="4"
                onChange={() => setFilterRating(4)}
              />
              ⭐⭐⭐⭐ 
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="5"
                onChange={() => setFilterRating(5)}
              />
              ⭐⭐⭐⭐⭐
            </label>
          </div>  
        </div>
        <div className="reviews">
          {filteredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    );
  };
  

export default ReviewSection;

