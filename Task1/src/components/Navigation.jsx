// Navigation.jsx

import React from "react";

const Navigation = ({ setPage }) => {

    const handleHomeClick = () => {
        setPage("home");
    };

    const handleAboutClick = () => {
        setPage("about");
    };

    return (
            <div className="navbar">
            <button onClick={handleHomeClick} className="nav-button">Home</button>
            <button onClick={handleAboutClick} className="nav-button">About Us</button>
            </div>
        );
    };

export default Navigation;