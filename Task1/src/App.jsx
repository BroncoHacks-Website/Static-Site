/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
/* import Profile from './components/Profile.jsx'; */
import ProfilePropGrid from "./components/Profile2.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      {<Navbar></Navbar>}
      <div className="header-container">
        <h3> Place your Mini Profile Component below!</h3>
      </div>
      {/* {<Profile></Profile>} */}
      {<ProfilePropGrid></ProfilePropGrid>}
    </div>
  );
}

export default App;
