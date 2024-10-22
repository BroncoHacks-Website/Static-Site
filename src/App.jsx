import { BrowserRouter, Routes, Route} from 'react-router-dom' 
import './App.css'
import NavBar from './Components/NavBar.jsx'
import Home from './Pages/Home.jsx'
import FAQ from './Pages/FAQ.jsx'
import MeetTheTeam from './Pages/MeetTheTeam.jsx'
import Schedule from './Pages/Schedule.jsx'
import Sponsors from './Pages/Sponsors.jsx'
import AboutUs from './Pages/About.jsx'
import Footer from './Components/Footer.jsx'
import Error from './Pages/Error.jsx'
import "./styles/Profile.css"; /* temporary just so it visually looks fine */

function App() {
  return (
    <BrowserRouter basename='/Static-Site/'>
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

    </BrowserRouter>
  )
}
export default App;