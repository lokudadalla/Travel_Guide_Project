const express = require("express");
const {fetchHotel} = require("../services/hotel_service.js");

const router = express.Router();

router.post("/hotel_data_1", fetchHotel);

module.exports = router;