import { Link } from 'react-router-dom'

function NavBar() {
    return (
      <nav>
        <Link to={"./"}>Home </Link>
        <Link to={"./AboutUs"}>About Us </Link>
        <Link to={"./FAQ"}>FAQ </Link>
        <Link to={"./MeetTheTeam"}>Meet The Team </Link>
        <Link to={"./Sponsors"}>Sponsors </Link>
        <Link to={"./Schedule"}>Schedule </Link>
      </nav>
    )
  }
  
export default NavBar