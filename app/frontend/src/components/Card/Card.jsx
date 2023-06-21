import React from "react";
import "./Card.css"
import PPLogo from "../../../src/PartyPointFullLogo.png";
import P2PLogo from "../../../src/FullLogoRed.png";

function Card(eventObject) {
    //placeholder data
    const name = "EventName"
    const time = "20:00 - 06:00";
    const date = "01.01.2020 - 02.01.2020";
    const location = "Budapest";
    // TODO - fetch events here

    //TODO - make object for placeholder data - DRY!

    return (
        <div className="a4cards">
            
            <div className="cardHolder">
                <div className="genreCard">
                    <img className="pocsfaszubagoly" src={PPLogo} alt="PartyPointLogo"/>
                    <div className="innerCard">
                        <div className="eventName"> Name: {name}</div>
                        <div className="eventDate">Date: {date}</div>
                        <div className="eventTime">Time {time}</div>
                        <div className="Location">Location:{location} </div>
                    </div>
                </div>

            </div>
            <div className="cardHolder">
                <div className="genreCard">
                    <img className="pocsfaszubagoly" src={P2PLogo} alt="PartyPointLogo"/>
                    <div className="innerCard">
                        <div className="eventName"> Name: {name}</div>
                        <div className="eventDate">Date: {date}</div>
                        <div className="eventTime">Time {time}</div>
                        <div className="Location">Location:{location} </div>
                    </div>
                </div>

            </div>
            <div className="cardHolder">
                <div className="genreCard">
                    <img className="pocsfaszubagoly" src={PPLogo} alt="PartyPointLogo"/>
                    <div className="innerCard">
                        <div className="eventName"> Name: {name}</div>
                        <div className="eventDate">Date: {date}</div>
                        <div className="eventTime">Time {time}</div>
                        <div className="Location">Location:{location} </div>
                    </div>
                </div>

            </div>
            <div className="cardHolder">
                <div className="genreCard">
                    <img className="pocsfaszubagoly" src={P2PLogo} alt="PartyPointLogo"/>
                    <div className="innerCard">
                        <div className="eventName"> Name: {name}</div>
                        <div className="eventDate">Date: {date}</div>
                        <div className="eventTime">Time {time}</div>
                        <div className="Location">Location:{location} </div>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default Card;