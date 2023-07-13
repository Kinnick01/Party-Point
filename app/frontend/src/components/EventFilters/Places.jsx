import { Link } from "react-router-dom";
import React from "react";

function Places(){
    return(
   <div>
       <div><a>This is the Places page</a></div>
     <Link to="/">
          <button> Home</button>
        </Link>
   </div>
    
)}
export default Places;