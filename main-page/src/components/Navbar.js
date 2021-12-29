import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav d-flex justify-content-between ">
      <div className="nav-brand">
        <Link className="nav-link" to="/">
          Company
        </Link>
      </div>
      <div className="nav-items">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">
              Edit
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
