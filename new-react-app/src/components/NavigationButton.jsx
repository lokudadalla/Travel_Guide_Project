import React from "react";
import { Link } from "react-router-dom";

function NavigationButton({text,background,linkpage}) {
    return (
        <Link to={linkpage} style={{ textDecoration: "none" }}>
            <button style={{
                padding: "20px 20px",
                background: background,
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
            }}>
                {text}
            </button>
        </Link>
    );
}

export default NavigationButton;

