import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { io } from "socket.io-client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ReviewInput.css";
import ReviewSection from "./ReviewSection";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [trip, setTrip] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3000", {
      transports: ["websocket"],
      reconnectionAttempts: 5,
      reconnectionDelay: 2000,
    });
  
    setSocket(newSocket);
  
    newSocket.on("connect", () => {
      console.log("✅ WebSocket Connected:", newSocket.connected);
    });
  
    newSocket.on("connect_error", (err) => {
      console.error("❌ WebSocket Connection Error:", err);
    });
  
    newSocket.on("disconnect", () => {
      console.warn("⚠️ WebSocket Disconnected!");
    });
  
    // ✅ Fetch reviews from backend only on mount
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:3000/reviews/all");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("❌ Error fetching reviews:", error);
      }
    };
  
    fetchReviews();
  
    // ✅ Fix: Ensure new reviews are not duplicated
    newSocket.on("newReview", (newReview) => {
      console.log("📢 Received new review from WebSocket:", newReview);
  
      setReviews((prevReviews) => {
        const alreadyExists = prevReviews.some((review) => review.id === newReview.id);
        return alreadyExists ? prevReviews : [newReview, ...prevReviews];
      });
    });
  
    return () => {
      newSocket.off("newReview");
      newSocket.disconnect();
    };
  }, []);
  
  

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
        // ✅ Immediately update state without refetching everything
        setReviews((prevReviews) => {
          const alreadyExists = prevReviews.some((review) => review.id === result.review.id);
          return alreadyExists ? prevReviews : [result.review, ...prevReviews];
        });
  
        // ✅ Clear form fields
        setName("");
        setLocation("");
        setTrip("");
        setFeedback("");
        setRating(0);
  
        console.log("✅ Review submitted successfully:", result.review);
      } else {
        alert("❌ Failed to submit review: " + result.error);
      }
    } catch (error) {
      console.error("❌ Error submitting review:", error);
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
      <ReviewSection key={reviews.length} reviews={reviews} />
    </div>
  );
};

export default ReviewForm;
