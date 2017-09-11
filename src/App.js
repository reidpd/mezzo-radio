import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/component_Login';
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
          <Route exact path="/interface/:accessToken/:refreshToken" component={Interface} />
          <Route exact path="/user/:accessToken/:refreshToken" component={User} />
          <Route exact path="/error/:errorMsg" component={Error} />
        </div>
      </Router>
    );
  }

}

export default App;
