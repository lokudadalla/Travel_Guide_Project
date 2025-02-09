import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Connect to WebSocket server

const SubmitReview = ({ onNewReview }) => {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]); // Store all reviews

  // Fetch all reviews initially
  const fetchAllReviews = async () => {
    try {
      const response = await fetch("http://localhost:5000/reviews/all");
      const data = await response.json();
      setReviews(data);
      onNewReview(data); // Send reviews to parent component
    } catch (error) {
      console.error("Error fetching all reviews:", error);
    }
  };

  useEffect(() => {
    fetchAllReviews(); // Fetch all reviews on mount

    // Listen for new reviews from the WebSocket server
    const handleNewReview = (newReview) => {
      setReviews((prevReviews) => [newReview, ...prevReviews]); // Append new review
      onNewReview([newReview, ...reviews]); // Update parent component
    };

    socket.on("newReview", handleNewReview);

    return () => {
      socket.off("newReview", handleNewReview); // Cleanup WebSocket listener
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ review }),
      });

      const result = await response.json();

      if (response.ok) {
        setReview(""); // Clear input
        setReviews((prevReviews) => [result.review, ...prevReviews]);
        onNewReview([result.review, ...reviews]); // Update parent
      } else {
        alert("Failed to submit the review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div>
      <h1>Submit Your Review</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here..."
          required
          rows="5"
          cols="50"
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitReview;
