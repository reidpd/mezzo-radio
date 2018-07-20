import React, { Component } from 'react';
import './main.css';
require('dotenv').config();

const logo = require('../../images/logo.png');

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
      <div className="login-container">
        <img src={logo} />
        <h2>Welcome to Mezzo Radio! Please log into Spotify to access the main interface.</h2>
        <br></br>
        <button className="login-button" onClick={this.commenceOAuth}>Log Into Spotify</button>
      </div>
    );
  }
}
