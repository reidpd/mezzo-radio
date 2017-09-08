import React, { Component } from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../actions';
import '../../App.css';

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login }, dispatch);
};

class Auth extends Component {
  handleClick = (value) => {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    var state = generateRandomString(16);

    localStorage.setItem(stateKey, state);
    var scope = 'user-read-private user-read-email';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    window.location = url;

    const user = value;
    this.props.login(user);
  }

  render() {
    return (
      <div className="container">
        <div id="login">
          <h1>This is an example of the Authorization Code flow</h1>
          <a id="loginButton" onClick={this.handleClick} className="btn btn-primary">Log in with Spotify</a>
        </div>
        <div id="loggedin">
          <div id="user-profile">
            User Info = {this.props.userInfo}
          </div>
          <div id="oauth">
          </div>
          {/* <button className="btn btn-default" id="obtain-new-token">Obtain new token using the refresh token</button> */}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
