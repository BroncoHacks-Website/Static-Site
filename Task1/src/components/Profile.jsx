// Display first name: Gerardo
// Display last name: Solis
// Display major: Computer Science 
// Display Academic year: Senior
// Link to github account: https://github.com/Sol-Gerardo

function Profile() {
    return (
        <div className="text">
            <h1>
                <img src="./src/assets/JerrySolis.jpeg" alt="Jerry Solis" className="image"/>
            </h1>
            <h1>Jerry Solis</h1>
            <h2>Major: Computer Science</h2>
            <h2>Academic Year: Senior</h2>
            <h2>Github: <a href="https://github.com/Sol-Gerardo">Sol-Gerardo</a></h2>
        </div>
    )
  }


export default Profile