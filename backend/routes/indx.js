const express = require("express");
const { getAllReviews, addReview } = require("../services/service.js");

const router = express.Router();

router.get("/reviews/all", getAllReviews);
router.post("/reviews", addReview);

module.exports = router;

