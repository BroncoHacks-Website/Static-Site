import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile.jsx';

function App() {
  return (
    <div>
      <div className="header-container">
        <h3> Place your Mini Profile Component below!</h3>
      </div>
      {<Profile></Profile>}
    </div>
  )
}

export default App
