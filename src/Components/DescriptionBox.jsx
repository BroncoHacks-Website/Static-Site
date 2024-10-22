import "../styles/DescriptionBox.css";
import BroncoHacks_Logo from "../Assets/Profile/icon/BroncoHacks_Logo.png";
import BroncoMascot from "../Assets/DescriptionBox/imgs/cppBroncoMascot.png";

function DescriptionBox() {

    return (
      <>
        <div className="db-container">
          <div className="db-title-wrapper">
            <img className="db-logo" src={BroncoHacks_Logo} alt="BroncoHacks Logo"/>
            <span className="db-title">
              <h1>BroncoHacks</h1>
              <h2>California Polytechnic State University, Pomona</h2>
            </span>
          </div>
          <div className="db-content-wrapper">
            <img className="db-mascot" src={BroncoMascot} alt="Bronco Mascot"/>
            <span className="db-filler"></span>
            <h4>An unnoficial hackathon organization for Cal Poly Pomona, responsible for events such as MiniHack 2023 and BroncoHacks 2024</h4>
          </div>
        </div>
      </>
    )
  }
  
  export default DescriptionBox