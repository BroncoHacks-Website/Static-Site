/* eslint-disable react/no-unescaped-entities */
import "/src/styles/About.css";
import Winners from "../Components/WinnerCard";

function About() {
  return (
    <>
      <div className="about-page-container">
        <div className="about-container">
          <h1>About Us</h1>
          <div className="container-items">
            <div>
              <div className="container-clubs">
                <h2>In Association With</h2>
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/cppcss/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="https://ugc.production.linktr.ee/12da207a-6379-4d6a-b8ff-1b8fbbca1ad4_CFD8FBB7-FFEE-4DA9-A2FE-3C667A69CAE3.png?io=true&size=avatar-v3_0" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/gdsccpp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="https://ugc.production.linktr.ee/4p5hpFASIaaOcaWE6AdQ_tBDmCVo0020fsjeY?io=true&size=avatar-v3_0" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/cppgamedev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="https://yt3.googleusercontent.com/ytc/AIdro_mX4aIKbf6Z1RWWcYliFYLyR3zqGr6-uBpxyz7tz65jX-M=s176-c-k-c0x00ffffff-no-rj" />
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/calpolyfast/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="https://cdn.campsite.bio/eyJidWNrZXQiOiJjYW1wc2l0ZS1iaW8tc3RvcmFnZSIsImtleSI6IkNhbFBvbHlGQVNULzk2ZmQ2OGFhLWM4ODEtNGZmYi05YjhjLWEwODliZWNiOWQyMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIwMH19fQ==" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/cppmissa/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="https://ugc.production.linktr.ee/8csxebyRR9O3Fi4MdE0K_1BZQDBzEFM9N4Ig3?io=true&size=avatar-v3_0" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/cppshecodes/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="https://ugc.production.linktr.ee/yNbRfvBfTtyUfJyBW4Gp_rIXkg0O78wgQQI3O?io=true&size=avatar-v3_0" />
                    </a>
                  </li>
                  {/* <li><a href="https://www.instagram.com/calpolyscript/" target="_blank" rel="noopener noreferrer"><img src="../src/Assets/Profile/icon/script.png"/></a></li> */}
                  {/* remove line below once line 22 works for sure */}
                  <li>
                    <a
                      href="https://www.instagram.com/calpolyscript/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container-right">
              <h2>Cal Poly Pomona's Official Hackathon</h2>
              <p>
                Created by students for students. This 24-hour hackathon event
                hosted on Cal Poly Pomona's own campus. Hackers will compete in
                teams of 2-4 in either mobile development, web development, or
                cybersecurity. We welcome students of all skill levels to
                compete! This event is completely free to enter and food will be
                provided as well.{" "}
              </p>
              {/* additional paragraph, unsure what info to add */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <Winners></Winners>
        </div>
      </div>
      {/* <MeetTheTeam /> */}
    </>
  );
}

export default About;
