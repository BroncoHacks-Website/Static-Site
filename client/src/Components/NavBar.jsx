import "../styles/NavBar.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import BroncoHacksLogo from "../Assets/Profile/icon/BroncoHacks_Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleHamburger = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <Link className="navbar-header" to="/">
        <img src={BroncoHacksLogo} alt="" />
        <h1>BRONCO HACKS</h1>
      </Link>

      <ul className="navbar-links">
        <li>
          <Link className="link" to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/meettheteam">
            <h1>Team</h1>
          </Link>
        </li>
        <li>
          <Link to="/faq">
            <h1>FAQ</h1>
          </Link>
        </li>
        <Link className="apply-button" to="/signup">
          <button>
            <h1>APPLY</h1>
          </button>
        </Link>
      </ul>

      <div className="hamburger">
        <div id="hamburger-container">
          <div
            id="hamburger"
            className={open ? "open" : ""}
            onClick={toggleHamburger}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul className="dropdown-item-container">
            <Link
              className="navLinks"
              to="/"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">Home</li>
            </Link>
            <Link
              className="navLinks"
              to="/meettheteam"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">Team</li>
            </Link>
            <Link
              className="navLinks"
              to="/faq"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">FAQ</li>
            </Link>
            <Link
              className="navLinks"
              to="/signup"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">Apply</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;