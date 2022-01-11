import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/history">Search History</NavLink>
      </li>
      <li>
        <NavLink to="/search/:name">Search Users</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
