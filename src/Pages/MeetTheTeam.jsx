import Profile from "/src/Components/Profile";
import profileData from "/src/Assets/Profile/profileData";
import { useState } from "react";
import "/src/styles/MeetTheTeam.css";

function MeetTheTeam() {
  const [selectedRole, setSelectedRole] = useState("All"); // Initially show all profiles

  const selectTeam = (role) => {
    setSelectedRole(role);
  };

  return (
    <>
      <div className="meet-the-team">
        {/* <div className="faq-background"> */}
        <div className="team-container">
          <div className="mtt-title-container">
            <h1 className="mtt-title">Meet the Team</h1>
          </div>
          <div className="role-buttons">
            <button onClick={() => selectTeam("All")}>All</button>
            <button onClick={() => selectTeam("Primary Organizer")}>
              Primary Organizers
            </button>
            <button onClick={() => selectTeam("Project Manager")}>
              Project Manager
            </button>
            <button onClick={() => selectTeam("Website Developer")}>
              Website Developers
            </button>
            <button onClick={() => selectTeam("UI/UX")}>UI/UX</button>
            <button
              onClick={() => selectTeam("BroncoHacks 2023-2024 Committee")}
            >
              Broncohacks 2023-2024 Committee
            </button>
          </div>

          <div className="the-team">
            {/* Map through profileData to create bubbles for each team member */}
            {profileData
              .filter(
                (person) =>
                  selectedRole === "All" || person.role.includes(selectedRole)
              )
              .map((person) => (
                <div key={person.id} className="profile-wrapper">
                  <div className="profile-bubble">
                    <Profile
                      person={{
                        ...person,
                        role: selectedRole === "All" ? [] : [selectedRole], // Pass only the selected role
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default MeetTheTeam;
