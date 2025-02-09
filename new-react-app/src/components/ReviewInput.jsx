// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/ReviewInput.css";

// const ReviewForm = () => {
//   const [name, setName] = useState("");
//   const [homeCountry, setHomeCountry] = useState("");
//   const [travelCountry, setTravelCountry] = useState("");
//   const [reviewText, setReviewText] = useState("");
//   const [rating, setRating] = useState(0);

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Submit Your Review</h2>
//       <div className="card p-4 shadow">
//         {/* Name Field */}
//         <div className="mb-3">
//           <label className="form-label">Your Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your name"
//           />
//         </div>

//         {/* Home Country */}
//         <div className="mb-3">
//           <label className="form-label">Home Country</label>
//           <input
//             type="text"
//             className="form-control"
//             value={homeCountry}
//             onChange={(e) => setHomeCountry(e.target.value)}
//             placeholder="Enter your home country"
//           />
//         </div>

//         {/* Travel Country */}
//         <div className="mb-3">
//           <label className="form-label">Travel Country</label>
//           <input
//             type="text"
//             className="form-control"
//             value={travelCountry}
//             onChange={(e) => setTravelCountry(e.target.value)}
//             placeholder="Enter the country you visited"
//           />
//         </div>

//         {/* Star Rating */}
//         <div className="mb-3">
//           <label className="form-label">Your Rating</label>
//           <div>
//             {[...Array(5)].map((star, index) => {
//               const ratingValue = index + 1;
//               return (
//                 <label key={index}>
//                   <input
//                     type="radio"
//                     name="rating"
//                     value={ratingValue}
//                     onClick={() => setRating(ratingValue)}
//                     style={{ display: "none" }}
//                   />
//                   <FaStar
//                     size={30}
//                     color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
//                     style={{ cursor: "pointer" }}
//                   />
//                 </label>
//               );
//             })}
//           </div>
//         </div>

//         {/* Review Text */}
//         <div className="mb-3">
//           <label className="form-label">Your Review</label>
//           <textarea
//             className="form-control"
//             rows="4"
//             value={reviewText}
//             onChange={(e) => setReviewText(e.target.value)}
//             placeholder="Write your review here"
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <button className="btn btn-primary w-100">Submit Review</button>
//       </div>
//     </div>
//   );
// };

// export default ReviewForm;







          // import React, { useState, useEffect } from "react";
          // import { FaStar } from "react-icons/fa";
          // import { io } from "socket.io-client";
          // import "bootstrap/dist/css/bootstrap.min.css";
          // import "../css/ReviewInput.css";
          // import ReviewSection from "./ReviewSection";


          // const socket = io("http://localhost:3000"); // WebSocket connection


          // const ReviewForm = () => {
          //   const [name, setName] = useState("");
          //   const [location, setHomeCountry] = useState("");
          //   const [trip, setTravelCountry] = useState("");
          //   const [feedback, setReviewText] = useState("");
          //   const [rating, setRating] = useState(0);
          //   const [reviews, setReviews] = useState([]);

          //   // Fetch all reviews from backend
          //   const fetchReviews = async () => {
          //     try {
          //       const response = await fetch("http://localhost:3000/reviews/all");
          //       const data = await response.json();
          //       setReviews(data);
          //     } catch (error) {
          //       console.error("Error fetching reviews:", error);
          //     }
          //   };

          //   useEffect(() => {
          //     fetchReviews(); // Load reviews on mount

          //     // Listen for new reviews via WebSocket
          //     socket.on("newReview", (newReview) => {
          //       setReviews((prevReviews) => [newReview, ...prevReviews]);
          //     });

          //     return () => {
          //       socket.off("newReview"); // Cleanup
          //     };
          //   }, []);

          //   // Submit Review
          //   // const handleSubmit = async (e) => {
          //   //   e.preventDefault();

          //   //   const reviewData = {
          //   //     name,
          //   //     location,
          //   //     trip,
          //   //     rating,
          //   //     feedback,
          //   //   };

          //   //   try {
          //   //     const response = await fetch("http://localhost:3000/reviews", {
          //   //       method: "POST",
          //   //       headers: {
          //   //         "Content-Type": "application/json",
          //   //       },
          //   //       body: JSON.stringify(reviewData),
          //   //     });

          //   //     if (response.ok) {
          //   //       setName("");
          //   //       setHomeCountry("");
          //   //       setTravelCountry("");
          //   //       setReviewText("");
          //   //       setRating(0);
          //   //     } else {
          //   //       alert("Failed to submit review");
          //   //     }
          //   //   } catch (error) {
          //   //     console.error("Error submitting review:", error);
          //   //   }
          //   // };


          //   const handleSubmit = async (e) => {
          //     e.preventDefault();
            
          //     const reviewData = {
          //       name,
          //       location,
          //       trip,
          //       rating,
          //       feedback,
          //     };
            
          //     try {
          //       const response = await fetch("http://localhost:3000/reviews", {
          //         method: "POST",
          //         headers: {
          //           "Content-Type": "application/json",
          //         },
          //         body: JSON.stringify(reviewData),
          //       });
            
          //       const result = await response.json();
            
          //       if (response.ok) {
          //         setName("");
          //         setHomeCountry("");
          //         setTravelCountry("");
          //         setReviewText("");
          //         setRating(0);
          //         console.log("Review submitted successfully", result);
          //         alert("Review submitted successfully");
          //       } else {
          //         alert("Failed to submit review: " + result.error);
          //       }
          //     } catch (error) {
          //       console.error("Error submitting review:", error);
          //       alert("Something went wrong. Please try again.");
          //     }
          //   };
            



          //   return (
          //     <div className="container mt-5">
          //       <h2 className="text-center mb-4">Submit Your Review</h2>
          //       <div className="card p-4 shadow">
          //         <form onSubmit={handleSubmit}>
          //           {/* Name */}
          //           <div className="mb-3">
          //             <label className="form-label">Your Name</label>
          //             <input
          //               type="text"
          //               className="form-control"
          //               value={name}
          //               onChange={(e) => setName(e.target.value)}
          //               placeholder="Enter your name"
          //               required
          //             />
          //           </div>

          //           {/* Home Country */}
          //           <div className="mb-3">
          //             <label className="form-label">Home Country</label>
          //             <input
          //               type="text"
          //               className="form-control"
          //               value={location}
          //               onChange={(e) => setHomeCountry(e.target.value)}
          //               placeholder="Enter your home country"
          //               required
          //             />
          //           </div>

          //           {/* Travel Country */}
          //           <div className="mb-3">
          //             <label className="form-label">Travel Country</label>
          //             <input
          //               type="text"
          //               className="form-control"
          //               value={trip}
          //               onChange={(e) => setTravelCountry(e.target.value)}
          //               placeholder="Enter the country you visited"
          //               required
          //             />
          //           </div>

          //           {/* Star Rating */}
          //           <div className="mb-3">
          //             <label className="form-label">Your Rating</label>
          //             <div>
          //               {[...Array(5)].map((star, index) => {
          //                 const ratingValue = index + 1;
          //                 return (
          //                   <label key={index}>
          //                     <input
          //                       type="radio"
          //                       name="rating"
          //                       value={ratingValue}
          //                       onClick={() => setRating(ratingValue)}
          //                       style={{ display: "none" }}
          //                     />
          //                     <FaStar
          //                       size={30}
          //                       color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
          //                       style={{ cursor: "pointer" }}
          //                     />
          //                   </label>
          //                 );
          //               })}
          //             </div>
          //           </div>

          //           {/* Review Text */}
          //           <div className="mb-3">
          //             <label className="form-label">Your Review</label>
          //             <textarea
          //               className="form-control"
          //               rows="4"
          //               value={feedback}
          //               onChange={(e) => setReviewText(e.target.value)}
          //               placeholder="Write your review here"
          //               required
          //             ></textarea>
          //           </div>

          //           {/* Submit Button */}
          //           <button type="submit" className="btn btn-primary w-100">
          //             Submit Review
          //           </button>
          //         </form>
          //       </div>
          //         <div>
          //         <ReviewSection key={reviews.id} reviews={reviews} />

          //         </div>

                  
          //       {/* Display Reviews
          //       <h2 className="text-center mt-5">Recent Reviews</h2>
          //       <div className="reviews-container">
          //         {reviews.length > 0 ? (
          //           reviews.map((rev, index) => (
          //             <div key={index} className="review-card p-3 shadow mb-3">
          //               <h5>{rev.name} ({rev.homeCountry})</h5>
          //               <p><b>Visited:</b> {rev.travelCountry}</p>
          //               <p>
          //                 <b>Rating:</b>{" "}
          //                 {[...Array(rev.rating)].map((_, i) => (
          //                   <FaStar key={i} color="#ffc107" />
          //                 ))}
          //               </p>
          //               <p>"{rev.reviewText}"</p>
          //             </div>
          //           ))
          //         ) : (
          //           <p>No reviews yet.</p>
          //         )}
          //       </div> */}
          //     </div>
          //   );
          // };

          // export default ReviewForm;










import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { io } from "socket.io-client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ReviewInput.css";
import ReviewSection from "./ReviewSection";

// ✅ Establish WebSocket connection
const socket = io("http://localhost:3000");

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [trip, setTrip] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  // ✅ Fetch reviews from backend when page loads
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:3000/reviews/all");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    
      fetchReviews(); // Load initial reviews
    
      // ✅ Listen for new reviews via WebSocket
      socket.on("newReview", (newReview) => {
        console.log("🔴 New review received via WebSocket:", newReview);
    
        setReviews((prevReviews) => {
          if (!prevReviews.some(review => review.id === newReview.id)) {
            return [newReview, ...prevReviews]; // Only add if it's unique
          }
          return prevReviews; // Prevent duplicates
        });
      });
    
      return () => {
        socket.off("newReview"); // Cleanup listener
      };
    }, []);
    

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      name,
      location,
      trip,
      rating,
      feedback,
    };

    try {
      const response = await fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      const result = await response.json();

      if (response.ok) {
        // ✅ Clear form fields
        setName("");
        setLocation("");
        setTrip("");
        setFeedback("");
        setRating(0);

        console.log("Review submitted successfully:", result.review);
      } else {
        alert("Failed to submit review: " + result.error);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Submit Your Review</h2>
      <div className="card p-4 shadow">
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Location */}
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location"
              required
            />
          </div>

          {/* Trip */}
          <div className="mb-3">
            <label className="form-label">Trip</label>
            <input
              type="text"
              className="form-control"
              value={trip}
              onChange={(e) => setTrip(e.target.value)}
              placeholder="Enter the country you visited"
              required
            />
          </div>

          {/* Rating */}
          <div className="mb-3">
            <label className="form-label">Your Rating</label>
            <div>
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      style={{ display: "none" }}
                    />
                    <FaStar
                      size={30}
                      color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                );
              })}
            </div>
          </div>

          {/* Feedback */}
          <div className="mb-3">
            <label className="form-label">Your Review</label>
            <textarea
              className="form-control"
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your review here"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Submit Review
          </button>
        </form>
      </div>

      {/* Displaying Reviews */}
      <div>
        <ReviewSection key={reviews.length} reviews={reviews} />
      </div>
    </div>
  );
};

export default ReviewForm;
          
