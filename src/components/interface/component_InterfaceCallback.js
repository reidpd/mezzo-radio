import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {} from '../../actions';
require('dotenv').config();
const axios = require('axios');
const base64 = require('base-64');

const credentials = require('../../config/auth.js');
const Spotify = require('spotify-web-api-node');
const spotifyApi = new Spotify(credentials);
console.log(spotifyApi);

const mapStateToProps = (state) => {}

const mapDispatchToProps = (dispatch) => {}

class InterfaceCallback extends Component {
  componentDidMount = () => {
    const params = {};
    const uri = window.location.href;
    const paramsIdx = uri.indexOf('?') + 1;
    const lengthyStr = uri.substring(paramsIdx);
    const obj = JSON.parse(decodeURIComponent(lengthyStr));

    // Set the access token on the API object to use it in later calls
    spotifyApi.setAccessToken(obj.access_token);
    spotifyApi.setRefreshToken(obj.refresh_token);

    // use the access token to access the Spotify Web API
    spotifyApi.getMe().then(({ body }) => {
      console.log(body);
    });

  }

  render() {
    return (
      <div className="interface_callback">
        <p>Loading....</p>
      </div>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Interface);
export default InterfaceCallback;
