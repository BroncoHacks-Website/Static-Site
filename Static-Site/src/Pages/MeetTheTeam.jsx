import '/src/styles/MeetTheTeam.css'; 
import Profile from '/src/Components/Profile'; 
import profileData from '/src/Assets/Profile/profileData'; 

function MeetTheTeam() {
  return (
    <div>
      <div className="meet-the-team">
        <h1>Meet the Team</h1>
        <div className="team-container">
          {/* Map through profileData to create bubbles for each team member */}
          {profileData.map((person, index) => (
            <div key={index} className="profile-wrapper">
              <div className="profile-bubble">
                <Profile person={person} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
