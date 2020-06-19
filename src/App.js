import React from 'react';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import Services from './Components/ServicesComponent'
import Details from './Components/DetailsComponent'
import AboutComponent from './Components/AboutComponent';
import PortfolioComponent from './Components/PortfolioComponent';
import TechnologyComponent from './Components/TechnologyComponent';
import ContactComponent from './Components/ContactComponent';
import ScrollHandlerComponent from './Components/ScrollHandlerComponent';


function App() {
  return (
    <div className="App" style={{ overflowX: 'hidden', width:'100vw' }}>
      <Router>
        <ScrollHandlerComponent/>
        <HeaderComponent />
        <HomeComponent />
        <PortfolioComponent />
        <Services/>
        <Details/>
        <TechnologyComponent />
        <AboutComponent />
        <ContactComponent />
      </Router>
    </div>
  )
}

export default App;
