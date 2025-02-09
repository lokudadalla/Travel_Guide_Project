import React from "react";
import { Link } from "react-router-dom";

function NavigationButton2() {
    return (
        <Link to="/explore" style={{ textDecoration: "none" }}>
            <button style={{
                padding: "20px 20px",
                background: "blue",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
            }}>
                Explore
            </button>
        </Link>
    );
}

export default NavigationButton2;
