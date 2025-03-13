const { db } = require("../Config/config.js");
const { emitNewReview } = require("../controllers/msgcontroller");

// Fetch all reviews
const getAllReviews = (req, res) => {
  const sql = "SELECT * FROM reviews ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Error fetching reviews:", err);
      return res.status(500).send({ error: "Database error." });
    }
    res.status(200).json(results);
  });
};

// Add a new review
const addReview = (req, res) => {
  const { name, location, trip, rating, feedback } = req.body;

  if (!name || !location || !trip || !rating || !feedback) {
    return res.status(400).send({ error: "All fields are required." });
  }

  const sql = "INSERT INTO reviews (name, location, trip, rating, feedback) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, location, trip, rating, feedback], (err, result) => {
    if (err) {
      console.error("❌ Error inserting review:", err);
      return res.status(500).send({ error: "Database error." });
    }

    const lastInsertedId = result.insertId;
    db.query("SELECT * FROM reviews WHERE id = ?", [lastInsertedId], (err, newReview) => {
      if (err) {
        console.error("❌ Error fetching latest review:", err);
        return res.status(500).send({ error: "Database error." });
      }

      if (newReview.length > 0) {
        const latestReview = newReview[0];

        // Emit new review event
        emitNewReview(latestReview);
      }

      res.status(200).send({ message: "✅ Review added successfully.", review: newReview[0] });
    });
  });
};

module.exports = { getAllReviews, addReview };
