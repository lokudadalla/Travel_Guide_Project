const { db } = require("../Config/config.js");
const {hello} =  require("./hotel_recommendation.js");

let new_data = {};

// ✅ Getter function to return the latest value of new_data
const getNewData = () => new_data;

// Fetch all reviews   
//laterly add asunc. if gives error remove it.
const fetchHotel = async (req, res) => {
  const {destination, checkInDate, checkOutDate, adults, children,rooms} = req.body;

  if (!destination || !checkInDate || !checkOutDate || !adults || !children || !rooms) {
    return res.status(400).send({ error: "All fields are required." });
  }

   // ✅ Save hotel request to shared memory
   console.log("✅ Hotel data stored_req_body:", req.body);
   new_data = { ...req.body };
   console.log("✅ Hotel data stored_new_data:", new_data);
  
  //  hello();
  //  console.log("result",req.body);
  //  res.status(200).send({ message: "Hotel data received successfully.", hotel_data: req.body });
  try {
    // ✅ Call hello() and wait for recommendations
    const recommendedHotels = await hello();

    console.log("✅ Recommended Hotels:", recommendedHotels);

    // ✅ Send recommended hotels to the frontend
    res.status(200).json({
        message: "Hotel data received successfully.",
        input_data: req.body,
        recommended_hotels: recommendedHotels, // Send recommendations
    });
} catch (error) {
    console.error("❌ Error during recommendation:", error);
    res.status(500).json({ error: "Failed to get recommendations" });
}  
};




function fetchAllHotels() {
  return new Promise((resolve, reject) => {
      db.query("SELECT * FROM hotels", (err, results) => {
          if (err) {
              reject(err); // Reject the Promise on error
          } else {
              resolve(results); // Resolve the Promise with results
          }
      });
  });
};

module.exports = { fetchHotel, fetchAllHotels, getNewData  };
