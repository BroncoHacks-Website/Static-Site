import { useState } from "react";
import Profile from "./Components/Profile.jsx";
import MeetTheTeam from "./Pages/MeetTheTeam"; // Import MeetTheTeam component
import "/src/styles/Profile.css"; // Temporary styling
import "/src/styles/TeamPage.css"; 

function App() {
  return (
    <>
      {/* Meet the Team Component */}
      <MeetTheTeam />

      <div className="container">
        <div className="profilegrid">
          {/* Tommy Phao Profile */}
          <Profile
            person={{
              name: "Tommy Phao",
              role: "Web Developer",
              linkedin: "https://www.linkedin.com/in/thomasphao/",
              picture: "../src/Assets/Profile/team/Tommy.jpg",
            }}
          ></Profile>

          {/* Rane Dy Profile */}
          <Profile
            person={{
              name: "Rane Dy",
              role: "Web Developer",
              linkedin: "https://www.linkedin.com/in/ranedy/",
              picture: "../src/Assets/Profile/team/Rane.jpg",
            }}
          ></Profile>

          {/* Armin Erika Polanco Profile */}
          <Profile
            person={{
              name: "Armin Erika Polanco",
              role: "Web Developer",
              linkedin: "https://www.linkedin.com/in/ArminErika/",
              picture: "../src/Assets/Profile/team/Unknown.png",
            }}
          ></Profile>
        </div>
      </div>
    </>
  );
}

export default App;


