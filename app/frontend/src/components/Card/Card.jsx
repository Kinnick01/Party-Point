import React from "react";
import "./Card.css"
import PPLogo from "../../../src/PartyPointFullLogo.png";
import P2PLogo from "../../../src/FullLogoRed.png";
import {placeholder_card_data} from "./placeholder_card_data";

function Card(eventObject) {
   // TODO - fetch events here
    let data = placeholder_card_data;

    //TODO - make object for placeholder data - DRY!

    return (
        <div className="card_scroller_container">
            {data.events.map((event, index) => {
                return (
                    <div className="cardHolder">
                        <img className="card_img" src={PPLogo} alt="PartyPointLogo"/>
                        <div className="innerCard">
                            <div className="eventName"> Name: {event.name}</div>
                            <div className="eventDate">Date: {event.date}</div>
                            <div className="eventTime">Time {event.time}</div>
                            <div className="Location">Location:{event.location} </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Card;