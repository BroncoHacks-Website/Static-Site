import React, { useState } from 'react';
import logo from '/src/Assets/Profile/icon/BroncoHacks_Logo.png';
import '../styles/Schedule.css';

function Schedule() {
  const [isFridayOpen, setIsFridayOpen] = useState(false);
  const [isSaturdayOpen, setIsSaturdayOpen] = useState(false);
  const [isSundayOpen, setIsSundayOpen] = useState(false);

  const toggleFriday = () => {
    setIsFridayOpen(!isFridayOpen);
  };

  const toggleSaturday = () => {
    setIsSaturdayOpen(!isSaturdayOpen);
  };

  const toggleSunday = () => {
    setIsSundayOpen(!isSundayOpen);
  };

  return (

    <div className="schedule-page">

      <div className='title-container'> 
        <h1>
          Schedule
        </h1>
      </div>

      <div className='schedule-container'>
      
        <div className='basic-info'>
          <img src={logo} alt="Logo" />
          <div className="title">
            <h1>BroncoHacks</h1>
              <div className="location-details">
                <p>Building: Student Center</p>
                <p>Room: Ursa Minor</p>
              </div>
            </div>
        </div>

        <div className="day-section">
          <div className="day-header" onClick={toggleFriday}>
            Friday - Team Formation
          </div>
          {isFridayOpen && (
            <div className="schedule">
              <p>00:00 Start of Hackathon</p>
              <p>00:00 Opening Statements</p>
              <p>00:00 Meal Times</p>
              <p>00:00 Workshops / Speaker Sessions</p>
              <p>00:00 Judging / Finalist Presentations</p>
              <p>00:00 Award Ceremony</p>
              <p>00:00 Other miscellaneous important info</p>
              <p>00:00 Closing Statements</p>
              <p>00:00 End of Hackathon</p>
              <p className="note">Note: Schedule is subject to change.</p>
            </div>
          )}
        </div>

        <div className="day-section">
          <div className="day-header" onClick={toggleSaturday}>
            Saturday - Workshops and Hacking
          </div>
          {isSaturdayOpen && (
            <div className="schedule">
              {/* Saturday schedule here */}
            </div>
          )}
        </div>

        <div className="day-section">
          <div className="day-header" onClick={toggleSunday}>
            Sunday - Final Day
          </div>
          {isSundayOpen && (
            <div className="schedule">
              {/* Sunday schedule here */}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

export default Schedule;