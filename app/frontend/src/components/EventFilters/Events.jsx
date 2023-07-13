import { Link } from "react-router-dom";
import React from "react";

function Events(){
    return(
   <div>
       <div><a>This is the events page</a></div>
     <Link to="/">
          <button> Home</button>
        </Link>
   </div>
    
)}
export default Events;