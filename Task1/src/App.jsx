import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile.jsx';

function App() {
  return (
    <div>
      <div class="header-container">
        <h3 className="text"> Place your Mini Profile Component below!</h3>
      </div>
      {<Profile></Profile>}
    </div>
  )
}

export default App