import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
      <nav style={{backgroundColor: "#A2D2FF"}}>
        <ul>
          <li style={{display: "inline-block"}}>
            <Link to="/">Home</Link>
          </li>
          <li style={{display: "inline-block"}}>
            <p>|</p>
          </li>
          <li style={{display: "inline-block"}}>
            <Link to="/profilelist">ProfileList</Link>
          </li>
          <li style={{display: "inline-block"}}>
            <p>|</p>
          </li>
          <li style={{display: "inline-block"}}>
            <Link to="/individualprofile">IndividualProfile</Link>
          </li>
       </ul>
      </nav>
    );
}
  
export default Navbar;