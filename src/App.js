import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouterComponent from './Components/RouterComponent'
import SpeedwellComponent from './Components/SpeedwellComponent';
import HeaderComponent from './Components/HeaderComponent';
import ScrollHandlerComponent from './Components/ScrollHandlerComponent';

function App() {
  return (
    <div className="App" style={{ overflowX: 'hidden', width: '100vw' }}>
      <Router>
      <ScrollHandlerComponent />
        <HeaderComponent/>
        <Switch>
          <Route path='/home' component={RouterComponent} />
          <Route path="/speedwell" component={SpeedwellComponent} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
