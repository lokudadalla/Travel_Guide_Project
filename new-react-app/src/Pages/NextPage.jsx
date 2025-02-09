import React from "react";
import { Link } from "react-router-dom";
import img14 from "../assets/images/img14.jpg";
import ReviewSection from "../components/ReviewSection";
import ReviewInput from "../components/ReviewInput";



function NextPage() {
    return (
        <div>
            <div>
                <img style={{
                        height: "50vh", // Half of the viewport height
                        width: "100%", // Takes the full width of the screen
                        backgroundSize: "cover", // Ensures the image covers the entire div
                        backgroundPosition: "center", // Centers the image
                        }} src={img14} alt="profile" />
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3  z-10" style={{ right: "-30%", top: "30%" }}>
                    <h2 className="text-6xl font-bold text-black px-6 py-2" >Happy Travelers</h2>
                    <p className="text-3xl text-black mb-4" style={{paddingLeft: "60px"}}>Enjoy Srilanka</p>
        
                </div>
            </div>

            {/* <div style={{padding: "70px", display: "flex", flexDirection: "column", justifyContent:"space-around"}}>
                <input style={{padding: "10px", display: "flex"}} type="text" placeholder="Enter your name" />
                <input style={{padding: "40px", display: "flex"}} type="text" placeholder="Enter review"/>
            </div> */}
            <ReviewInput/>

            
            

        
        </div>
    );
}

export default NextPage;
