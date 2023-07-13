import { Link } from "react-router-dom";
import React from "react";

function Genres(){
    return(
   <div>
       <div><a>This is the genres page</a></div>
     <Link to="/">
          <button> Home</button>
        </Link>
   </div>
    
)}
export default Genres;