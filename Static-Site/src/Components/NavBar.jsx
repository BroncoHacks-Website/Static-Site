import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBar.css"; 

function NavBar() {
  return (
    <nav className="flex items-center justify-start">
      <div className="flex space-x-4">
        <img
        className="Logo"
        src="../src/Assets/Profile/icon/BroncoHacks_Logo.png"
        style={{ width: '60px', height: '60px' }}  
        />
        <span className="BroncoText">BRONCO HACKS</span>
        <div className="nav-links"> 
            <Link to={"./"}>Home </Link>
            <Link to={"../MeetTheTeam"}>About Us</Link>
            <Link to={"../Sponsors"}>Sponsors</Link>
            <Link to={"../FAQ"}>FAQ</Link>
            <Link to={"../Login"}>Login</Link>
            
          
          <button className="apply">
            APPLY
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;