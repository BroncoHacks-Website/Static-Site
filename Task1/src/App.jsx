// App.jsx

import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import "./App.css";

function App() {

  const [currentPage, setCurrentPage] = useState("home");

  const setPage = (page) => {
    setCurrentPage(page);
  };

  // Placeholder components for home and about pages
  const HomePage = () => <div>This is the Home Page</div>;
  const AboutPage = () => <div>This is the About Page</div>;

  return (
    <div>
      <Navigation setPage={setPage} /> 
      {currentPage === "home" ? <HomePage /> : <AboutPage />}
      <div class="header-container">
        <h3>Place your Mini Profile Component below!</h3>
      </div>
      <Profile />
    </div>
  );
}

export default App;
