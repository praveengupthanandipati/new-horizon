import React from "react";
// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="fixed-top">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
      </header>
    </div>
  );
}

export default Header;
