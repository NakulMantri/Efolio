import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css"; // Import CSS file for styling

function Homepage() {
  return (
    <div>
      <h1>Welcome to efolio</h1>
      <nav className="navbar">
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/experiences" className="nav-link">Experience</Link>
      </nav>
    </div>
  );
}

export default Homepage;
