import React, { Component } from 'react';

/**
 * Our login page
 * Has a login button that hit's the login url
 */
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Welcome to Mezzo Radio! Please log into Spotify to access the main interface.</h2>
        <br></br>
        <a href="https://mezzo-radio-api.herokuapp.com/auth/spotify">Log Into Spotify</a>
      </div>
    );
  }
}
