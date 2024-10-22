import "../styles/Footer.css";

function Footer() {
    return (
      <footer>
        <div className="container">
          <div className="footer-content">
            <img className="broncohackslogo" src="../src/Assets/Profile/icon/BroncoHacks_Logo.png"/>
          </div>
          <div className="footer-content">
            <p>&copy;BroncoHacks. All rights reserved.</p>
          </div>
          <div className="footer-content">
            <h3>Connect with Us</h3>
            <a href="mailto: cppbroncohacks@gmail.com">cppbroncohacks@gmail.com</a>
            <ul>
            <li><a href="https://discord.gg/pEXRD5Zyvd" target="_blank" rel="noopener noreferrer"><img src="../src/Assets/Profile/icon/Discord.png"/></a></li>
            <li><a href="https://www.instagram.com/cppbroncohacks/" target="_blank" rel="noopener noreferrer"><img src="../src/Assets/Profile/icon/Instagram.png"/></a></li>
            <li><a href="" target="_blank" rel="noopener noreferrer"><img src="../src/Assets/Profile/icon/linkedin-small.png"/></a></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer