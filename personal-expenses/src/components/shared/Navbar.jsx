import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div id="navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/" activeclassname='active'>
              Project Name
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/"
                    activeclassname="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/Features"
                    activeclassname="active"
                  >
                    Features
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" 
                    to="/form" 
                    activeclassname="active">
                    Form
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link disabled"
                    to="/"
                    activeclassname="active"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
