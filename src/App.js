import React from 'react';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import { BrowserRouter as Router ,Route} from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import Services from './Components/ServicesComponent'
import AboutComponent from './Components/AboutComponent';
import PortfolioComponent from './Components/PortfolioComponent';
import TechnologyComponent from './Components/TechnologyComponent';
import ContactComponent from './Components/ContactComponent';
import ScrollHandlerComponent from './Components/ScrollHandlerComponent';
import SpeedwellComponent from './Components/SpeedwellComponent';

function App() {
  return (
    <div className="App" style={{ overflowX: 'hidden', width:'100vw' }}>
      <Router>
        <ScrollHandlerComponent/>
        <HeaderComponent />
        <HomeComponent />
        <PortfolioComponent />
        <Services />
        <TechnologyComponent />
        <AboutComponent />
        <ContactComponent />
        <Route path="/speedwell" component={SpeedwellComponent}/>
      </Router>
    </div>
  )
}

export default App;
