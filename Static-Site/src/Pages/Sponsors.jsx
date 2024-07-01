import { useState } from 'react';
import '../styles/Sponsors.css';
import checkeredFlag from "../Assets/Design/checkeredflag.png";
import sponsorsData from "../Assets/Sponsors/sponsors.json";

// Import the image files
import adobe from "../Assets/Sponsors/adobe.png";
import att from "../Assets/Sponsors/att.png";
import avanade from "../Assets/Sponsors/avanade.png";
import grubhub from "../Assets/Sponsors/grubhub.png";
import google from "../Assets/Sponsors/google.png";
import npm from "../Assets/Sponsors/npm.png";
import react from "../Assets/Sponsors/react.png";
import tesla from "../Assets/Sponsors/tesla.png";
import openai from "../Assets/Sponsors/openai.png";

function Sponsors() {

  const [hoveredLogo, setHoveredLogo] = useState(null);

  const handleLogoHover = (logo) => {
    setHoveredLogo(logo);
  };

  const handleLogoLeave = () => {
    setHoveredLogo(null);
  };

  const sponsorLogos = [
    { id: 1, logo: react, text: "React" },
    { id: 2, logo: tesla, text: "Tesla" },
    { id: 3, logo: adobe, text: "Adobe" },
  ];
  const sponsorLogos2 = [
    { id: 4, logo: avanade, text: "Avanade" },
    { id: 5, logo: google, text: "Google" },
    { id: 6, logo: npm, text: "npm" },
  ];
  const sponsorLogos3 = [
    { id: 7, logo: att, text: "AT&T" },
    { id: 8, logo: grubhub, text: "Grubhub" },
    { id: 9, logo: openai, text: "OpenAI" },
  ];

  return (
    <>
      <div className="our-sponsors">

        <div className="cloud-banner">
          <div className="cloud-text">
            <h1>Become A Sponsor Today</h1>    
          </div>
          <img src={checkeredFlag} className="checkered-flag left" alt="Checkered Flag" />
          <img src={checkeredFlag} className="checkered-flag right" alt="Checkered Flag" />
        </div>

        <div className="logo-row">
          {sponsorLogos.map((logo) => {
            // Find the sponsor object in sponsorsData with the matching name
            const sponsor = sponsorsData.find((sponsor) => sponsor.name === logo.text);
            return (
              <div key={logo.id} className="logo-wrapper" onMouseEnter={() => handleLogoHover(logo)} onMouseLeave={handleLogoLeave}>
                <img src={logo.logo} alt={logo.text} />
                {hoveredLogo && hoveredLogo.id === logo.id && (
                  <div className="company-info">
                    <span>
                      <h2>{logo.text}</h2>
                      {/* Check if sponsor is found before accessing its properties */}
                      {sponsor && (
                        <>
                          <p>{sponsor.description}</p>
                          <p>Contact: {sponsor.email}</p>
                          <p>Website: <a href={sponsor.website} target="_blank" rel="noopener noreferrer">{sponsor.website}</a></p>
                        </>
                      )}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>


        <div className="logo-row">
          {sponsorLogos2.map((logo) => {
            // Find the sponsor object in sponsorsData with the matching name
            const sponsor = sponsorsData.find((sponsor) => sponsor.name === logo.text);
            return (
              <div key={logo.id} className="logo-wrapper" onMouseEnter={() => handleLogoHover(logo)} onMouseLeave={handleLogoLeave}>
                <img src={logo.logo} alt={logo.text} />
                {hoveredLogo && hoveredLogo.id === logo.id && (
                  <div className="company-info">
                    <span>
                      <h2>{logo.text}</h2>
                      {/* Check if sponsor is found before accessing its properties */}
                      {sponsor && (
                        <>
                          <p>{sponsor.description}</p>
                          <p>Contact: {sponsor.email}</p>
                          <p>Website: <a href={sponsor.website} target="_blank" rel="noopener noreferrer">{sponsor.website}</a></p>
                        </>
                      )}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="logo-row">
          {sponsorLogos3.map((logo) => {
            // Find the sponsor object in sponsorsData with the matching name
            const sponsor = sponsorsData.find((sponsor) => sponsor.name === logo.text);
            return (
              <div key={logo.id} className="logo-wrapper" onMouseEnter={() => handleLogoHover(logo)} onMouseLeave={handleLogoLeave}>
                <img src={logo.logo} alt={logo.text} />
                {hoveredLogo && hoveredLogo.id === logo.id && (
                  <div className="company-info">
                    <span>
                      <h2>{logo.text}</h2>
                      {/* Check if sponsor is found before accessing its properties */}
                      {sponsor && (
                        <>
                          <p>{sponsor.description}</p>
                          <p>Contact: {sponsor.email}</p>
                          <p>Website: <a href={sponsor.website} target="_blank" rel="noopener noreferrer">{sponsor.website}</a></p>
                        </>
                      )}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
}
  
export default Sponsors;