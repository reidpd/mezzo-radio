/*

This file defines the methods by which Mezzo-Radio interacts with Spotify Web API.

The methods below rely on a library known as 'spotify-web-api-node',
which provides a wrapper object with methods to access the API.

All of these functions are promise-based,
and will be utilized elsewhere in the application.

More specifically, these functions are intended to be used
within the redux-saga architecture of the app as its 'clientApi',
within try/catch blocks of generators within 'redux/saga/index.js'.

*/
// import {recordSpinToggle} from '../redux/routines';
// import store from '../redux/store';
/* Importing the store yields this error: "TypeError: __WEBPACK_IMPORTED_MODULE_4__spotify__.a is not a constructor", must investigate later */
// const { dispatch, getState } = store;
const spotify = require('../config/spotifyWebApi.js');
const axios = require('axios');

export default class SpotifyPromisesClass {
  constructor() { this.spotify = spotify; }

  handleError = (error) => {
    if (error.statusCode === 401) {
      // axios.get('https://mezzo-radio-api.herokuapp.com/refresh')
      // .then(response => console.log('axios response ===', response))
      // .catch(error => console.log('axios error === ', error));
      const refresh_token = this.spotify.getRefreshToken();
      window.location.assign('https://mezzo-radio-api.herokuapp.com/refresh/' + refresh_token);
    } else {
      console.log("handleError input === ", error);
    }
  }

  getMe = () => {
    return this.spotify.getMe().then(response => response, error => error);
  }

  search = (query) => {
    return this.spotify.search(query, ['album', 'artist']).then(data => data, err => err);
  }

  getArtistRelatedArtists = (artistId) => {
    return this.spotify.getArtistRelatedArtists(artistId).then(data => data, err => err);
  }

  getArtistAlbums = (artistId) => {
    return this.spotify.getArtistAlbums(artistId).then(data => data, err => console.log(err))
  }

  getArtistAlbumsWithTracks = (artistId) => {
    this.spotify.getArtistAlbums(artistId)
    .then(data => data.body.items.map(item => item.id), err => console.log(err))
    .then(ids => {
      this.spotify.getAlbums(ids).then(data => data.body.albums)
    }, err => console.log(err));
  }

  // getAlbumTracks = (albumId) => {
  //   this.spotify.getAlbumTracks(albumId).then(data => data, err => err);
  // }

  getPlaybackState = () => {
    this.spotify.getMyCurrentPlaybackState().then(response => response, err => console.log(err));
  }

  startAlbum = (context_uri) => {
    return this.spotify.play({context_uri}).then(response => response, err => console.log(err));
  }

  play = () => {
    return this.spotify.play().then(res => res, error => error);
  }

  pause = () => {
    return this.spotify.pause().then(res => res, error => error);
  }

  playbackToggle = () => {
    this.spotify.getMyCurrentPlaybackState()
      .then(response => {
        // store.dispatch(recordSpinToggle(!response.body.is_playing));
        if (response.body.is_playing) {
          return this.spotify.pause()
          .then(response => response, err => console.log(err));
        } else {
          return this.spotify.play()
          .then(response => response, err => console.log(err));
        }
      }, err => console.log(err))
  }

  skipToPrevious = () => {
    return this.spotify.skipToPrevious().then(res => res, err => err);
  }

  skipToNext =() => {
    return this.spotify.skipToNext().then(res => res, err => err);
  }
}
