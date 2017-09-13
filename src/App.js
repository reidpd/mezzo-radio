import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/component_Login';
import Interface from './components/interface/component_Interface.js';
import InterfaceCallback from './components/interface/component_InterfaceCallback.js';
import User from './components/component_User';
import Error from './components/component_Error';
import './App.css';
// import Auth from './components/auth';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/interface" component={Interface} />
          <Route exact path="/interface/callback" component={InterfaceCallback} />
          <Route exact path="/error/:errorMsg" component={Error} />
        </div>
      </Router>
    );
  }

}

export default App;
