import React, { useState } from "react";
import "../css/BookingSearch.css"; // Import the CSS file
import { FaHotel, FaCalendarAlt, FaUser } from "react-icons/fa";
import img20 from "../assets/images/img20.jpg";


const BookingSearch = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

   // New State to Store Recommended Hotels
   const [recommendedHotels, setRecommendedHotels] = useState([]);


  const handleSearch = async (e) => {
    e.preventDefault();
    alert(
      `Searching for stays in ${destination} from ${checkInDate} to ${checkOutDate} for ${adults} adults, ${children} children, and ${rooms} room(s).`
    );

    const hotel_data = {
      destination: destination,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      adults: adults,
      children: children,
      rooms: rooms,
    };
    console.log(hotel_data);

    try {
      console.log("hello");
      const response = await fetch("/hotel_data_1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hotel_data)
      });
  
      const result = await response.json();
      console.log(result);
  
      if (response.ok) {
        setRecommendedHotels(result.recommended_hotels); // Store recommendations

        // Clear form fields
        setDestination("");
        setCheckInDate("");
        setCheckOutDate("");
        setAdults(0);
        setChildren(0);
        setRooms(1);
  
        console.log("✅ Review submitted successfully:", result);
      } else {
        alert("❌ Failed to submit review: " + result.error);
      }
    } catch (error) {
      console.error("❌ Error submitting review:", result);
    }
  
  };

  

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <img className="hero-image" src={img20} alt="Scenic Travel" />
        {/* Overlay Content */}
        <div className="hero-overlay">
          <h1 className="hero-title">Travelanka.com</h1>
          <span className="hero-subtitle">Flying high with freedom</span>
          {/* <div className="hero-buttons">
            <button className="nav-btn">Register</button>
            <button className="nav-btn">Sign In</button>
          </div> */}
        </div>
      </div>

      {/* Booking Section */}
      <div className="booking-container">
        <div className="left-content">
          <h2>Find your next stay</h2>
          <p>Search deals on hotels, homes, and much more...</p>
        </div>

        <div className="right-content">
          <div className="search-box">
            <div className="search-item">
              <FaHotel className="icon" />
              <input
                type="text"
                placeholder="Where are you going?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div className="search-item">
              <FaCalendarAlt className="icon" />
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
              <span> - </span>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </div>

            <div className="search-item">
              <FaUser className="icon" />
              <select value={adults} onChange={(e) => setAdults(e.target.value)}>
                {[...Array(10).keys()].map((num) => (
                  <option key={num} value={num + 1}>
                    {num + 1} Adults
                  </option>
                ))}
              </select>

              <select value={children} onChange={(e) => setChildren(e.target.value)}>
                {[...Array(6).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num} Children
                  </option>
                ))}
              </select>

              <select value={rooms} onChange={(e) => setRooms(e.target.value)}>
                {[...Array(5).keys()].map((num) => (
                  <option key={num} value={num + 1}>
                    {num + 1} Room(s)
                  </option>
                ))}
              </select>
            </div>

            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>


{recommendedHotels.length > 0 && (
    <div className="recommended-hotels">
        <h2>Recommended Hotels</h2>
        <div className="hotel-list">
            {recommendedHotels.map((hotel) => (
                <div key={hotel.id} className="hotel-card">
                    {/* Hotel Name */}
                    <h3 className="hotel-name">{hotel.hotel_name}</h3>

                    <div className="hotel-content">
                        {/* Hotel Image */}
                        <div className="hotel-image-container">
                            <img
                            src={`/image/${hotel.image_url}.jpg`}
                            alt={hotel.hotel_name}
                            className="hotel-image"
                          />
                        </div>

                        {/* Hotel Description */}
                        <div className="hotel-description">
                            <p><strong>Location:</strong> {hotel.location}</p>
                            <p><strong>Surroundings:</strong> {hotel.surrounding_places}</p>
                            <p><strong>Distance from Town:</strong> {hotel.distance_from_town} km</p>
                            <div className="price-container">
                              <p className="price"><strong>Price (Single Room):</strong> ${hotel.price_single_room}</p>
                              <p className="price"><strong>Price (Double Room):</strong> ${hotel.price_double_room}</p>
                            </div>
                            <p className="contact"><strong>Contact:</strong> {hotel.contact}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)}



    </div>
  );
};

export default BookingSearch;
