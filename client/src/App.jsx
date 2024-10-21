import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import '../src/App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home.jsx'
import FAQ from './Pages/FAQ'
import MeetTheTeam from './Pages/MeetTheTeam'
import Schedule from './Pages/Schedule.jsx'
import Sponsors from './Pages/Sponsors'
import AboutUs from './Pages/About.jsx'
import Footer from './Components/Footer.jsx'
import Error from './Pages/Error.jsx'
import "./styles/Profile.css"; /* temporary just so it visually looks fine */

function App() {
  return (
    <Router>
      <NavBar className="navbar" />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<AboutUs/>}/>
          <Route path="/FAQ" element={<FAQ/>}/>
          <Route path="/Team" element={<MeetTheTeam/>}/>
          <Route path="/Sponsors" element={<Sponsors/>}/>
          <Route path="/Schedule" element={<Schedule/>}/>
          <Route path="/Error" element={<Error/>}/>
      </Routes>
      <Footer/>

    </Router>
  )
}
export default App;