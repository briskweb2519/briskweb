import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouterComponent from './Components/RouterComponent'
import SpeedwellComponent from './Components/SpeedwellComponent';
import NutanComponent from './Components/NutanComponent';
import HeaderComponent from './Components/HeaderComponent';
import ScrollHandlerComponent from './Components/ScrollHandlerComponent';

function App() {
  return (
    <div className="App" style={{ overflowX: 'hidden', width: '100vw' }}>
      <Router>
      <ScrollHandlerComponent />
        <HeaderComponent/>
        <Switch>
        <Route path='/' component={RouterComponent} />
          <Route path='/home' component={RouterComponent} />
          <Route path="/speedwell" component={SpeedwellComponent} />
          <Route path="/nutan" component={NutanComponent} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
