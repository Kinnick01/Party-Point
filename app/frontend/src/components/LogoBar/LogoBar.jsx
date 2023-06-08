import React from "react";
import "./logobar.css";
import logo from "./partyPointFavicon.PNG"

function Logobar() {
    return (
        <div className="logobar-container">
            <img src={logo} alt="Logo" className="logo-image" />
        </div>
    );
}

export default Logobar;
