import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink className="site-logo" to="/">
        #VanLife
      </NavLink>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/host"
        >
          Host
        </NavLink>
      </nav>
    </header>
  );
}