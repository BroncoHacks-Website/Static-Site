// Profile.jsx

import '/src/styles/Profile.css'; // temporary just so it visually looks fine

function Profile({person}) {

  return (
    <div className="profile">
      <img
        className="profilepicture"
        src={person.picture}
        alt={"Picture of " + person.name}
      />
      <div className="profilebody">
        <div className="name">{person.name}</div>
        <div className="role">
          {Array.isArray(person.role) ? person.role.join(', ') : person.role}</div>
      </div>
      <a href={person.linkedin}>
        <img
          className="linkedinpicture"
          src="/src/Assets/Profile/icon/linkedin-small.png"
          alt="LinkedIn"
        />
      </a>
    </div>
  );
}

export default Profile;
