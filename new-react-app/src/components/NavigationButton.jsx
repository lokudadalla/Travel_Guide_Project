import React from "react";
import { Link } from "react-router-dom";

function NavigationButton() {
    return (
        <Link to="/next-page" style={{ textDecoration: "none" }}>
            <button style={{
                padding: "20px 20px",
                background: "green",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
            }}>
                Reviews
            </button>
        </Link>
    );
}

export default NavigationButton;

