import React, { Component } from 'react';
require('dotenv').config();

/**
 * Our login page
 * Has a login button that hits the login url
 */
export default class Login extends Component {
  commenceOAuth = () => {
    const env = process.env.NODE_ENV;
    window.location.assign('https://mezzo-radio-api.herokuapp.com/auth/spotify/' + env);
  }

  render() {
    return (
      <div className="login">
        <h2>Welcome to Mezzo Radio! Please log into Spotify to access the main interface.</h2>
        <br></br>
        <button onClick={this.commenceOAuth}>Log Into Spotify</button>
      </div>
    );
  }
}
