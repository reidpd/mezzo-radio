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
        <img src={logo} className="login-logo"/>
        <h2>Welcome to Mezzo Radio! Please log into Spotify to access the main interface.</h2>
        <br></br>
        <button className="login-button" onClick={this.commenceOAuth}>
          <h1 className="login-button-text">LOG INTO SPOTIFY</h1>
        </button>
        <br></br>
        <div className="device-notice">
          <h4>Please note that this website is optimized for desktop computers running Google Chrome.</h4>
          <h4>If you are using a mobile device, you can still search for record covers, but you will not be able to play music.</h4>
        </div>
      </div>
    );
  }
}
