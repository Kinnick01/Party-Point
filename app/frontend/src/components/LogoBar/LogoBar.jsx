import React from "react";
import "./logobar.css";
import logo from "/Users/krausadam/Desktop/festivepoint app./Party-Point/app/frontend/src/components/LogoBar/LogoWithSlogen.png"

function Logobar() {
    return (
        <div className="logobar-container">
            <img src={logo} alt="Logo" className="logo-image" />
        </div>
    );
}

export default Logobar;
