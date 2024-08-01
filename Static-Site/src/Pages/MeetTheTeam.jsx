import '/src/styles/MeetTheTeam.css';
import '/src/styles/Profile.css';
import Profile from '/src/Components/Profile';
import profileData from '/src/Assets/Profile/profileData';
import { useState } from 'react';

function MeetTheTeam() {
  const [selectedRole, setSelectedRole] = useState('All');

  const [isAll, setIsAll] = useState(true)

  const selectTeam = (role) => {
    setSelectedRole(role);
    setIsAll(false);
  }

  const setAll = (role) => {
    setIsAll(true);
  }

  //randomzies position of teammembers in all
  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    
    return array;
  }
  
  const shuffledProfileData = shuffleArray([...profileData]);

  return (
    <div>
      <div className="container">
    
      <div className='meet-the-team'>
        <h1>Meet the Team</h1>
            <div>
              <button onClick={() => setAll('All')}>All</button>
              <button onClick={() => selectTeam('Primary Organizer')}>Primary Organizers</button>
              <button onClick={() => selectTeam('Website Developer')}>Website Developers</button>
              <button onClick={() => selectTeam('UI/UX')}>UI/UX</button>
              <button onClick={() => selectTeam('Application Portal Developer')}>Application Portal Developers</button>
              <button onClick={() => selectTeam('Extra Help')}>Extra Help</button>
            </div>
          </div>


          {/* Map through profileData to create bubbles for each team member*/}
          {isAll ? (  
            <div className="profilegrid"> {/*Randomizes everyone in all*/}
              {shuffledProfileData.filter(person => person.role).map((person, index) => (
                  <div key={index}>
                    <div className="person">
                      <Profile person={person} />
                    </div>
                  </div>
              ))}
            </div>
          ) : (
            <div className="profilegrid"> {/*Other roles in alphabetical order*/}
                {profileData.filter(person => person.role.includes(selectedRole)).map((person, index) => (
                  <div key={index}>
                    <div className="person">
                      <Profile person={person} />
                    </div>
                  </div>
              ))}
            </div>
          )}

      </div>
    </div>
  );
}

export default MeetTheTeam;