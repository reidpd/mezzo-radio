import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {} from '../../actions';
require('dotenv').config();

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
    const paramSplit = lengthyStr.split('&');
    paramSplit.forEach(str => {
      const pair = str.split('=');
      let key = pair[0], val = pair[1];
      params[key] = val;
    });
    console.log('obj === ', params);
    // console.log('cookie === ', document.cookie.split('=')[1]);
    // console.log(document.cookie.split('=')[1] !== params.state);
    console.log(spotifyApi);
    // spotifyApi.authorizationCodeGrant(params.code).then(data => {
    //   const { expires_in, access_token, refresh_token } = data.body;
    //
    //   // Set the access token on the API object to use it in later calls
    //   spotifyApi.setAccessToken(access_token);
    //   spotifyApi.setRefreshToken(refresh_token);
    //
    //   // use the access token to access the Spotify Web API
    //   spotifyApi.getMe().then(({ body }) => {
    //     console.log(body);
    //   });
    // })

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
