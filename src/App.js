import React from 'react';
import ReactGa from 'react-ga';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouterComponent from './Components/RouterComponent'
import SpeedwellComponent from './Components/SpeedwellComponent';
import NutanComponent from './Components/NutanComponent';
import HeaderComponent from './Components/HeaderComponent';
import ScrollHandlerComponent from './Components/ScrollHandlerComponent';
import CarwashComponent from './Components/CarwashComponent';

function App() {
  ReactGa.initialize('G-W6J1CYKY3K');
  return (
    <div className="App" style={{fontFamily: 'Raleway sans-serif', overflowX: 'hidden' }}>
      <Router>
      <ScrollHandlerComponent />
        <HeaderComponent/>
        <Switch>
        <Route path='/' exact component={RouterComponent} />
          <Route path="/speedwell" component={SpeedwellComponent} />
          <Route path="/nutan" component={NutanComponent} />
          <Route path="/carwash" component={CarwashComponent} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
