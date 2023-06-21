import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import"./Home.css";

export default function HomePage() {
    return (
        <>
        <div className="homePageHolder">
        <div >
        <Link to="/genres">
          <button> Genres</button>
        </Link>
      </div>
            <Card/>
            <Link to="/places">
          <button> Places</button>
        </Link>
            <Card/>
            <Link to="/events">
          <button> Events</button>
        </Link>
            <Card/>
            </div>
        </>
    );
}
