/*

This component was initially built to handle an OAuth callback address that would,
upon storing access/refresh tokens in redux, would change React Router address to a cleaner URL.

Its future existence is currently TBD.

*/

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {} from '../../actions';
require('dotenv').config();

const spotify = require('../../config/spotifyWebApi.js');
console.log(spotify.__proto__);

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
    spotify.setAccessToken(obj.access_token);
    spotify.setRefreshToken(obj.refresh_token);

    // use the access token to access the Spotify Web API
    spotify.getMe().then(({ body }) => console.log(body) );

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
