import React from 'react';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import { BrowserRouter as Router} from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import Services from './Components/ServicesComponent'
import AboutComponent from './Components/AboutComponent';
function App() {
  return (
    <div className="App" style={{overflowX:'hidden'}}>
      <Router>
        <HeaderComponent />
        <HomeComponent />
        <Services/>
        <AboutComponent/>
      </Router>
    </div>
  );
}

export default App;
