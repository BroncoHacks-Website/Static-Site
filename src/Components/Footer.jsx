import "../styles/Footer.css";
import BroncoHacks_Logo from "../Assets/Profile/icon/BroncoHacks_Logo.png";
import Discord from "../Assets/Profile/icon/Discord.png";
import Instagram from "../Assets/Profile/icon/Instagram.png";
import LinkedIn from "../Assets/Profile/icon/linkedin-small.png";

function Footer() {
    return (
      <footer>
        <div className="container">
          <div className="footer-content">
            <img className="broncohackslogo" src={BroncoHacks_Logo}/>
          </div>
          <div className="footer-content">
            <p>&copy;BroncoHacks. All rights reserved.</p>
          </div>
          <div className="footer-content">
            <h3>Connect with Us</h3>
            <a href="mailto: cppbroncohacks@gmail.com">cppbroncohacks@gmail.com</a>
            <ul>
            <li><a href="https://discord.gg/pEXRD5Zyvd" target="_blank" rel="noopener noreferrer"><img src={Discord}/></a></li>
            <li><a href="https://www.instagram.com/cppbroncohacks/" target="_blank" rel="noopener noreferrer"><img src={Instagram}/></a></li>
            <li><a href="" target="_blank" rel="noopener noreferrer"><img src={LinkedIn}/></a></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer