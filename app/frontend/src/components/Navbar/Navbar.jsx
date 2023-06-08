import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

const menu = [
    {text: "Home", href: "/"},
    {text: "Events", href: "/events"},
    {text: "FAQ", href: "/faq"},
    {text: "My profile", href: "/profile"}
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        {
            isOpen ?
                <div className="navbar-container">
                    <div className="hamburger-icon" id="icon" onClick={handleClick}>
                        <div className="icon-1" id="a"></div>
                        <div className="icon-2" id="b"></div>
                        <div className="icon-3" id="c"></div>
                        <div className="clear"></div>
                    </div>
                    <nav>
                        <ul className="navbar-list">
                            {menu.map((e, i) => (
                                <li className="navbar-list-item" key={i}>
                                    <Link className="navbar-link" href={e.href}>
                                        <a className="navbar-a">{e.text}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="dark-red" id="blue"></div>
                </div>
                :
                <div className="navbar-container">
                    <div className="hamburger-icon" id="icon" onClick={handleClick}>
                        <div className="icon-1 a" id="a"></div>
                        <div className="icon-2 c" id="b"></div>
                        <div className="icon-3 b" id="c"></div>
                        <div className="clear"></div>
                    </div>
                    <nav className="show">
                        <ul className="navbar-list-mobile">
                            {menu.map((e, i) => (
                                <li className="navbar-list-item-mobile" key={i}>
                                    <Link className="navbar-link-mobile" href={e.href}>
                                        <a onClick={handleClick} className="navbar-a-mobile">{e.text}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="dark-red slide" id="blue"></div>
                </div>
        }
        </>
    )
}

export default Navbar;