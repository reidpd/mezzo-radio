/*

This is the central interface container for the app, where primary components for app usage are organized.

The Mezzo-Radio experience contains the following big components:
  - A 'search_bar' for users to find artists/albums/genres they like
  - A 'crate' to house records / search results
  - A 'record/stack' to organize a queue of upcoming selections
  - A 'record/player' to play desired music

  - *** Future feature: 'crate-queue', collection of past crates for instant replay ***

*/

import './main.css';
// React, Redux Boilerplate
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { bindRoutineCreators } from 'redux-saga-routines';
import { connect } from 'react-redux';

// Components
import SearchBar from '../search_bar';
import Crate from '../crate';
// import RecordStack from "../record/stack";
import RecordPlayer from '../record/player';


// Redux
import { setTokens, startTimer, stopTimer } from '../../redux/actions';
import { albumFocus, setUserInfo, recordSpinToggle,
        playbackState, setMaxTrackTime, /*nextTrackCount,*/
        updateAlbumTracks, setMaxRecordTime } from '../../redux/routines';

// Spotify Connections
import SpotifyPromisesClass from '../../spotify';
const spotify = require('../../config/spotifyWebApi.js');
let spotifyPromises;

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    tokens: state.tokensReducer,
  };
};

const actions = { setTokens, setUserInfo, startTimer, stopTimer };
const routines = { albumFocus, setUserInfo, recordSpinToggle,
                   playbackState, setMaxTrackTime, /*nextTrackCount,*/
                   updateAlbumTracks, setMaxRecordTime };
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    routines: bindRoutineCreators(routines, dispatch)
  }
}

class Interface extends Component {
  componentDidMount = () => {
    if (this.props.user === null) {
      const obj = this.getTokensFromURI(window.location.href);

      // Set the access token on the API object to use it in later calls
      spotify.setAccessToken(obj.access_token);
      spotify.setRefreshToken(obj.refresh_token);
      spotifyPromises = new SpotifyPromisesClass();
      spotify.getMe().then(response => this.props.routines.setUserInfo(response.body), error => spotifyPromises.handleError(error) );
      this.props.actions.setTokens(obj);

      spotify.getMyCurrentPlaybackState()
        .then(response => {
          console.log('response === ', response);
          if (response.body) {
            this.props.actions.startTimer(response.body.progress_ms);
            this.props.routines.setMaxTrackTime(response.body.item.duration_ms);
            this.props.routines.playbackState(); // refactor this later for fewer API requests
            this.props.routines.recordSpinToggle(response.body.is_playing);
            if (response.body.is_playing) {
              spotify.getAlbumTracks(response.body.item.album.id)
              .then(response => {
                const total_duration = response.body.items.map(track => track.duration_ms).reduce((acc, next) => acc + next);
                console.log('total_duration === ', total_duration)
                this.props.routines.setMaxRecordTime(total_duration);
              }, err => console.log(err));
              this.props.routines.albumFocus(response.body.item.album);
              this.props.routines.updateAlbumTracks(response.body.item.album.id);
            } else {
              this.props.actions.stopTimer();
            }
          }
        }, err => console.log(err))
    }
  }

  getTokensFromURI = (uri) => {
    const paramsIdx = uri.indexOf('?') + 1;
    const paramStr = uri.substring(paramsIdx);
    return JSON.parse(decodeURIComponent(paramStr));
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <img className="logo" src={require('../../images/new_images/logo_rgb.svg')} alt="mezzo-radio-logo"></img>
          <SearchBar form='simple' className="search"/>
        </div>
        {/* <RecordStack /> */}
        <div className="core-engine">
          <RecordPlayer className="recordplayer"/>
          <Crate className="crate"/>
        </div>
        <br></br>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interface);
