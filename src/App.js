import React from 'react';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import PortfolioComponent from './Components/PortfolioComponent';
import TechnologyComponent from './Components/TechnologyComponent';
import ContactComponent from './Components/ContactComponent';

function App() {
  return (
    <div className="App">
      <HomeComponent/>
      <PortfolioComponent/>
      <TechnologyComponent/>
      <ContactComponent/>
    </div>
  );
}

export default App;
