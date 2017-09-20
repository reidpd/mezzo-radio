/*

This is the central interface container for the app, where primary components for app usage are organized.

The Mezzo-Radio experience contains the following big components:
  - A 'search_bar' for users to find artists/albums/genres they like
  - A 'crate' to house records / search results
  - A 'record/stack' to organize a queue of upcoming selections
  - A 'record/player' to play desired music

  - *** Future feature: 'crate-queue', collection of past crates for instant replay ***

*/

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
import { setTokens } from '../../redux/actions';
import { albumFocus, setUserInfo, recordSpinToggle } from '../../redux/routines';

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

const actions = { setTokens, setUserInfo };
const routines = { albumFocus, setUserInfo, recordSpinToggle };
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    routines: bindRoutineCreators(routines, dispatch)
  }
}

class Interface extends Component {
  componentDidMount = () => {
    if (this.props.user === null) {
      const uri = window.location.href;
      const paramsIdx = uri.indexOf('?') + 1;
      const lengthyStr = uri.substring(paramsIdx);
      const obj = JSON.parse(decodeURIComponent(lengthyStr));

      // Set the access token on the API object to use it in later calls
      spotify.setAccessToken(obj.access_token);
      spotify.setRefreshToken(obj.refresh_token);
      // must restore this line: add to bug list
      spotify.getMe().then(response => this.props.routines.setUserInfo(response.body), error => console.log(error) );
      this.props.actions.setTokens(obj);

      spotify.getMyCurrentPlaybackState()
        .then(response => {
          console.log(response.body);
          this.props.routines.recordSpinToggle(response.body.is_playing);
          if (response.body.is_playing) {
            this.props.routines.albumFocus(response.body.item.album);
          }
        }, err => console.log(err))
      // use the access token to access the Spotify Web API
      spotifyPromises = new SpotifyPromisesClass();

    }

  }

  // search = () => spotifyPromises.playbackToggle();
  //
  // searchArtists = () => {
  //   spotify.searchArtists('fleet')
  //     .then(data => {
  //       console.log('results for spotify.searchArtists(fleet): ', data)
  //     }, err => { console.log('Something went wrong! Your error message is: ', err) })
  // }
  //
  // searchAlbums = () => {
  //   spotify.searchAlbums('brown')
  //     .then(data => {
  //       console.log('results for spotify.searchAlbums(brown): ', data)
  //     }, err => { console.log('Something went wrong! Your error message is: ', err) });
  // }
  //
  // getArtistRelatedArtists = () => {
  //   spotify.getArtistRelatedArtists('4EVpmkEwrLYEg6jIsiPMIb')
  //     .then(data => {
  //       console.log('results for spotify.getArtistRelatedArtists(${alt-J id}): ', data.body);
  //     }, err => { console.log('Something went wrong! Your error message is: ', err) });
  // }
  //
  // getArtistAlbums = () => {
  //   spotify.getArtistAlbums('4MXUO7sVCaFgFjoTI5ox5c')
  //     .then(data => data.body.items.map(item => item.id), err => console.log(err))
  //     .then(ids => {
  //       spotify.getAlbums(ids).then(data => console.log(data), err => console.log(err));
  //     }, err => console.log(err));
  // }

  getMyCurrentPlaybackState = () => {
    spotifyPromises.getPlaybackState();
  }

  render() {
    return (
      <div className="interface_container">
        <h1>Mezzo-Radio</h1>
        {/* <RecordStack /> */}
        <Crate />
        <RecordPlayer />
        <br></br>
        <SearchBar form='simple' />
        {/* <button onClick={this.search}>Search</button>
        <button onClick={this.searchArtists}>searchArtists</button>
        <button onClick={this.searchAlbums}>searchAlbums</button>
        <button onClick={this.getArtistRelatedArtists}>getArtistRelatedArtists</button>
        <button onClick={this.getArtistAlbums}>getArtistAlbums</button>
        <button onClick={this.getMyCurrentPlaybackState}>getMyCurrentPlaybackState</button> */}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interface);
