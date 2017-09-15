/*

This is the central interface container for the app, where primary components for app usage are organized.

The Mezzo-Radio experience contains the following big components:
  - A 'search_bar' for users to find artists/albums/genres they like
  - A 'crate' to house records / search results
  - A 'record/stack' to organize a queue of upcoming selections
  - A 'record/player' to play desired music

  - *** Future feature: 'crate-queue', collection of past crates for instant replay ***

*/

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchBar from '../search_bar';
import Crate from '../crate';
// import RecordStack from "../record/stack";
// import RecordPlayer from '../record/player';
import { setTokens, setUserInfo } from '../../redux/actions';

const actions = { setTokens, setUserInfo };

const spotify = require('../../config/spotifyWebApi.js');

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    tokens: state.tokensReducer,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

class Interface extends Component {
  componentDidMount = () => {
    if (this.props.user === null) {
      const params = {};
      const uri = window.location.href;
      const paramsIdx = uri.indexOf('?') + 1;
      const lengthyStr = uri.substring(paramsIdx);
      const obj = JSON.parse(decodeURIComponent(lengthyStr));
      console.log(obj);

      // Set the access token on the API object to use it in later calls
      spotify.setAccessToken(obj.access_token);
      spotify.setRefreshToken(obj.refresh_token);
      this.props.setTokens(obj);

      // use the access token to access the Spotify Web API
      spotify.getMe().then(({ body }) => this.props.setUserInfo(body) );
    }

  }

  render() {
    return (
      <div className="interface_container">
        <h1>Mezzo-Radio Header</h1>
        {/* <RecordStack /> */}
        {/* <Crate /> */}
        <SearchBar />
        {/* <RecordPlayer /> */}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interface);
