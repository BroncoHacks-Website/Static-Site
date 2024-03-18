function Member({ person }) {
  return (
      <div className="profile">
      <img className="profilepicture" src={person.image} alt={"Picture of" + person.name}/>
        <div className="profilebody">
          <name>{person.name}</name>
          <major>{person.major}</major>
          <etc>{person.role}</etc>
          <etc>{person.year}</etc>
          <etc>{person.link}</etc>
      </div>
    </div>
  );
}

function ProfileProps() {
  return (
    <>
      <Member
        size={100}
        person={{
          name: "Tommy Phao",
          major: "Business Administration - Computer Information Systems",
          role: "test",
          year: "Second year",
          link: "https://github.com/xdkaine",
          image:
            "https://media.licdn.com/dms/image/D5603AQFI7ZBRCOheqQ/profile-displayphoto-shrink_200_200/0/1698549537540?e=1715817600&v=beta&t=ojbaGRCop6sU6VzK6VmFyc9n0dPMdnSQPrvw2E-iL_I",
        }}
      />
    </>
  );
}

function ProfileGrid() {
  return (
    <div className="container">
      <h2>Meet the Team!</h2>
      <div className="profilegrid">
        <ProfileProps />
      </div>
    </div>
  );
}

export default ProfileGrid;
