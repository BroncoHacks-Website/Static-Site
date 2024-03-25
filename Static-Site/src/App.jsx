import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import '../src/App.css'
import NavBar from './Components/NavBar'
import FAQ from './Pages/FAQ'
import MeetTheTeam from './Pages/MeetTheTeam'
import Sponsors from './Pages/Sponsors'
import Profile from './Components/Profile.jsx';
import Footer from './Components/Footer.jsx';
import "./styles/Profile.css"; /* temporary just so it visually looks fine */

function App() {
  return (
    <Router>
      <div className="navbar">
        <NavBar/>
      </div>
      <Routes>
          <Route path="FAQ" element={<FAQ/>}/>
          <Route path="MeetTheTeam" element={<MeetTheTeam/>}/>
          <Route path="Sponsors" element={<Sponsors/>}/>
      </Routes>
      <div classame="footer">
        <Footer/>
      </div>
    </Router>
  )
}
export default App;