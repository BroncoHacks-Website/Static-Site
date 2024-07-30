/* eslint-disable react/no-unescaped-entities */
import '/src/styles/About.css';
import AboutAssociationBox from '../Components/AboutAssociationBox';
import AboutHackathonBox from '../Components/AboutHackathonBox';

function About() {

    return (
      <>
        <div className = "main-container">
            <div className = "content-container">
                <h1>About Us</h1>

                {/* Slideshow - temporary until real slideshow is in */}
                <div className="lg-slideshow-wrapper"></div>

                {/* Content Components */}
                <AboutHackathonBox></AboutHackathonBox>
                <AboutAssociationBox></AboutAssociationBox>
            </div>
        </div>
      </>
    )
  }
  
  export default About;