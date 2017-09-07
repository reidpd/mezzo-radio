import React, { Component } from 'react';
import '../../App.css';

class Auth extends Component {
  render() {
    return (
      <div className="container">
        <div id="login">
          <h1>This is an example of the Authorization Code flow</h1>
          <a href="/login" className="btn btn-primary">Log in with Spotify</a>
        </div>
        <div id="loggedin">
          <div id="user-profile">
          </div>
          <div id="oauth">
          </div>
          {/* <button className="btn btn-default" id="obtain-new-token">Obtain new token using the refresh token</button> */}
        </div>
      </div>
    )
  }
}

export default Auth;
