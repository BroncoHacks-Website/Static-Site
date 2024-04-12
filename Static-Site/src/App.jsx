import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import '../src/App.css'
import NavBar from './Components/NavBar'
import FAQ from './Pages/FAQ'
import MeetTheTeam from './Pages/MeetTheTeam'
import Sponsors from './Pages/Sponsors'
import Profile from "./Components/Profile.jsx";
import "./styles/Profile.css"; /* temporary just so it visually looks fine */
import Countdown from "./Components/Countdown.jsx";
import DescriptionBox from "./Components/DescriptionBox.jsx";

function App() {
  let deadline = "October, 31, 2024";

  return (
    <Router>
      <div className="navbar">
        <NavBar/>
      </div>
      <Countdown deadline={deadline} />
      <DescriptionBox/>
      <Routes>
          <Route path="FAQ" element={<FAQ/>}/>
          <Route path="MeetTheTeam" element={<MeetTheTeam/>}/>
          <Route path="Sponsors" element={<Sponsors/>}/>
      </Routes>
    </Router>
  )
}
export default App;



