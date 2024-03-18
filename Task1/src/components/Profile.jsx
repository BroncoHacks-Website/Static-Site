// Profile.jsx
import React from "react";
import "./Profile.css";

const Profile = () => {
  const firstName = "Jane";
  const lastName = "Doe";
  const major = "Computer Science";
  const academicYear = "Senior";
  const githubLink = "https://github.com/example";
  const profilePic = "/src/assets/avatar.png";

  return (
    <div className="profile">
      <div className="profile-picture">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className = "profile-info">
        <h1>Mini Profile</h1>
        <p>Name: {firstName} {lastName}</p>
        <p>Major: {major}</p>
        <p>Academic Year: {academicYear}</p>
        <p><a href={githubLink}>GitHub</a></p>
      </div>
    </div>
  );
};

export default Profile;
