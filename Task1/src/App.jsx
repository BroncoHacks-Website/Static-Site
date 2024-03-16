import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Profile from './components/Profile';
import NavigationBar from './Components/NavigationBar';


function App() {
  return (
    <div>
      <NavigationBar/>
      <div class="header-container">
        <h3> Place your Mini Profile Component below!</h3>
      </div>
      <Profile />
    </div>
  )
}

export default App
