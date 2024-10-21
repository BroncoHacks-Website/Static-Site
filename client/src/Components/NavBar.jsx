import "../styles/NavBar.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import BroncoHacksLogo from "../Assets/Profile/icon/BroncoHacks_Logo.png";
// import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleHamburger = () => {
    setOpen(!open);
  };
  // const isAuthenticated = useIsAuthenticated();

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
          <Link to="/About">
            <h1>About</h1>
          </Link>
        </li>
        <li>
          <Link to="/Team">
            <h1>Meet The Team</h1>
          </Link>
        </li>
        <li>
          <Link to="/Sponsors">
            <h1>Sponsors</h1>
          </Link>
        </li>
        <li>
          <Link to="/faq">
            <h1>FAQ</h1>
          </Link>
        </li>
        <li>
          <Link to="/schedule">
            <h1>Schedule</h1>
          </Link>
        </li>
        {/* <Link
          className="apply-button"
          to={isAuthenticated ? "/profile" : "/login"}
        >
          <button>{isAuthenticated ? <h1>PROFILE</h1> : <h1>APPLY</h1>}</button>
        </Link> */}
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
              to="/about"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">About</li>
            </Link>
            <Link
              className="navLinks"
              to="/team"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">Meet The Team</li>
            </Link>
            <Link
              className="navLinks"
              to="/sponsors"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">Sponsors</li>
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
              to="/schedule"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">Schedule</li>
            </Link>
            {/* <Link
              className="navLinks"
              to={isAuthenticated ? "/profile" : "/login"}
            >
              <li className="dropdown-item">
                {isAuthenticated ? "Profile" : "Apply"}
              </li>
            </Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
