import { Link } from 'react-router-dom';
import "../styles/NavBar.css"; 

function NavBar() {
  return (
    <nav className="flex items-center">
      <div className="flex space-x-4">
        <img className="Logo" src="../src/Assets/Profile/icon/BroncoHacks_Logo.png" style={{ width: '60px', height: '60px' }}/>
          <span className="BroncoText">BRONCO HACKS</span>
      </div>
        <div className="nav-links">
            <Link to={"./"}>Home </Link>
            <Link to={"../MeetTheTeam"}>Meet The Team</Link>
            <Link to={"../AboutUs"}>About Us</Link>
            <Link to={"../Sponsors"}>Sponsors</Link>
            <Link to={"../FAQ"}>FAQ</Link>
            <Link to={"../Login"}>Login</Link>
          <button className="apply">APPLY</button>
        </div>
    </nav>
  );
}

export default NavBar;