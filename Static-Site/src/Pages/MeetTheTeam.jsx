// MeetTheTeam.jsx

import React, { useState } from 'react';
import Profile from '/src/Components/Profile';
import profileData from '/src/Assets/Profile/profileData.json';
import '/src/Styles/MeetTheTeam.css';

function MeetTheTeam() {
  const [selectedRole, setSelectedRole] = useState('All'); // Initially show all profiles

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  // Filter profiles based on the selected role sorted in alphabetical order by name
  const filteredProfiles = profileData
    .filter(person => {
      if (selectedRole === 'All') {
        return true; // Show all profiles when 'All' is selected
      } else {
        return person.role.includes(selectedRole); // Show profiles if selected role
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort profiles alphabetically by name

  return (
    <div>
      <div className="meet-the-team">
        <h1>Meet the Team</h1>
        <div className="role-buttons">
          <button onClick={() => handleRoleChange('All')}>All</button>
          <button onClick={() => handleRoleChange('Primary Organizer')}>Primary Organizer</button>
          <button onClick={() => handleRoleChange('Website Developer')}>Website Developer</button>
          <button onClick={() => handleRoleChange('Application Portal Developer')}>Portal Developer</button>
          <button onClick={() => handleRoleChange('UI/UX')}>UI/UX</button>
          <button onClick={() => handleRoleChange('Extra Help')}>Extra Help</button>
          {/* Add more buttons for other roles as needed */}
        </div>
        <div className="team-container">
          {/* Map through filteredProfiles to create bubbles for each team member */}
          {filteredProfiles.map((person, index) => (
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