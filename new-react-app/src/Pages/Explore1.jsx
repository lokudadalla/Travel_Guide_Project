import React from "react";
import { Link } from "react-router-dom";
import '../css/Exp.css';
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.jpg";
import img15 from "../assets/images/img15.jpg";
import img16 from "../assets/images/img16.jpg";
import img17 from "../assets/images/img17.jpg";
import img18 from "../assets/images/img18.jpg";
import img4 from "../assets/images/img4.jpg";
import img2 from "../assets/images/img2.jpg";
import Navbar3 from "../components/Navbar";

function Explore() {
    const cities = [
        { 
            name: "Colombo", 
            image: img11, 
            about: "Colombo, the bustling capital of Sri Lanka, offers a mix of colonial charm, modern skyscrapers, and vibrant markets. Explore Galle Face Green, visit Gangaramaya Temple, and enjoy street food while experiencing the city’s energetic vibe." 
        },
        { 
            name: "Kandy", 
            image: img12, 
            about: "Nestled in the hills, Kandy is home to the sacred Temple of the Tooth Relic, scenic Kandy Lake, and the Royal Botanical Gardens. This cultural capital blends history, nature, and traditional Sri Lankan arts." 
        },
        { 
            name: "Galle", 
            image: img13, 
            about: "A UNESCO-listed city, Galle is famous for its Dutch-era Fort, charming cobblestone streets, and stunning coastal views. Discover colonial architecture, boutique shops, and breathtaking sunsets over the Indian Ocean." 
        },
        { 
            name: "Nuwara Eliya", 
            image: img14, 
            about: "Often called 'Little England,' Nuwara Eliya is known for its tea plantations, cool climate, and picturesque landscapes. Visit tea estates, hike to waterfalls, and enjoy serene boat rides on Gregory Lake." 
        },
        { 
            name: "Jaffna", 
            image: img15, 
            about: "Jaffna, in northern Sri Lanka, showcases rich Tamil heritage, ancient Hindu temples, and stunning beaches. Explore Nallur Kandaswamy Temple, Jaffna Fort, and taste unique northern Sri Lankan cuisine." 
        },
        { 
            name: "Anuradhapura", 
            image: img16, 
            about: "One of Sri Lanka’s ancient capitals, Anuradhapura boasts centuries-old stupas, sacred fig trees, and impressive ruins. A key pilgrimage site, it reflects the country’s deep Buddhist history and traditions." 
        },
        { 
            name: "Sigiriya", 
            image: img17, 
            about: "Sigiriya, or 'Lion Rock,' is a UNESCO-listed fortress with breathtaking views and stunning frescoes. Climb the rock to explore the ancient palace ruins, gardens, and historical significance of this royal site." 
        },
        { 
            name: "Ella", 
            image: img18, 
            about: "A paradise for nature lovers, Ella features stunning tea-covered hills, waterfalls, and hiking trails. Visit Little Adam’s Peak, Nine Arches Bridge, and experience the famous scenic train ride from Kandy to Ella." 
        },
        { 
            name: "Trincomalee", 
            image: img4, 
            about: "Trincomalee is a coastal gem with pristine beaches, whale watching, and rich history. Visit Koneswaram Temple, Fort Frederick, and enjoy snorkeling in the clear blue waters of Pigeon Island." 
        },
        { 
            name: "Bentota", 
            image: img2, 
            about: "A tropical beach paradise, Bentota is perfect for water sports, luxury resorts, and Ayurvedic wellness. Take a river safari, visit turtle hatcheries, and relax on its golden beaches for the ultimate getaway." 
        },
    ];

    return (
        <div className="container">
            <header className="header">
                <div className="head"> 
                        <div className="nav-left">
                            <Navbar3/>
                        </div>
                        <h1 className="text-right">
                            Explore Sri Lanka
                        </h1>
                </div>
                {/* <nav className="navbar">
                    <button> Cities </button>
                    <button> Beaches </button>
                    <button> Mountains </button>
                    <button> Adventure </button>
                </nav> */}
            </header>
            <div className="grid-container">
                {cities.map((city, index) => (
                    <div key={index} className="card">
                        <img src={city.image} alt={city.name} className="card-image" />
                        <h3 className="card-title">{city.name}</h3>
                        <p className="card-text">{city.about}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Explore;
