import React from "react";
import { Link } from "react-router-dom";

function NavigationButton2() {
    return (
        <Link to="/explore" style={{ textDecoration: "none" }}>
            <button style={{
                padding: "11px 20px",
                background: "#7d7902ff",
                color: "white",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
            }}>
                Explore
            </button>
        </Link>
    );
}

export default NavigationButton2;
