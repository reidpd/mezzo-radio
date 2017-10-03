/*

This file defines the methods by which Mezzo-Radio interacts with Spotify Web API.

The methods below rely on a library known as 'spotify-web-api-node',
which provides a wrapper object with methods to access the API.

All of these functions are promise-based,
and will be utilized elsewhere in the application.

More specifically, these functions are intended to be used
within the redux-saga architecture of the app as its 'clientApi',
within try/catch blocks of generators within 'redux/saga/index.js'.

Any interactions involving the redux store should be abstracted away from this file.
This file is only concerned with interacting with the Spotify API.

*/
require('dotenv').config();
const spotify = require('../config/spotifyWebApi.js');

export default class SpotifyPromisesClass {
  constructor() { this.spotify = spotify; }

  handleError = (error) => {
    if (error.statusCode === 401) {
      const env = process.env.NODE_ENV;
      const refresh_token = this.spotify.getRefreshToken();
      const url = 'https://mezzo-radio-api.herokuapp.com/refresh/' + refresh_token + '/' + env;
      window.location.assign(url);
    } else {
      console.log("handleError input === ", error);
    }
  }

  getMe = () => {
    return this.spotify.getMe().then(response => response, error => error);
  }

  getAlbumTracks = (context_uri) => {
    return this.spotify.getAlbumTracks(context_uri).then(res => res, error => this.handleError(error))
  }

  search = (query) => {
    return this.spotify.search(query, ['album', 'artist']).then(data => data, error => this.handleError(error));
  }

  getArtistRelatedArtists = (artistId) => {
    return this.spotify.getArtistRelatedArtists(artistId).then(data => data, error => this.handleError(error));
  }

  getArtistAlbums = (artistId) => {
    return this.spotify.getArtistAlbums(artistId).then(data => data, error => this.handleError(error))
  }

  getArtistAlbumsWithTracks = (artistId) => {
    this.spotify.getArtistAlbums(artistId)
    .then(data => data.body.items.map(item => item.id), error => this.handleError(error))
    .then(ids => {
      this.spotify.getAlbums(ids).then(data => data.body.albums)
    }, error => this.handleError(error));
  }

  // getAlbumTracks = (albumId) => {
  //   this.spotify.getAlbumTracks(albumId).then(data => data, error => error);
  // }

  getPlaybackState = () => {
    return this.spotify.getMyCurrentPlaybackState().then(response => response, error => this.handleError(error));
  }

  startAlbum = (context_uri) => {
    return this.spotify.play({context_uri}).then(response => response, error => this.handleError(error));
  }

  play = () => {
    return this.spotify.play().then(res => res, error => this.handleError(error));
  }

  pause = () => {
    return this.spotify.pause().then(res => res, error => this.handleError(error));
  }

  playbackToggle = () => {
    this.spotify.getMyCurrentPlaybackState()
      .then(response => {
        // store.dispatch(recordSpinToggle(!response.body.is_playing));
        if (response.body.is_playing) {
          return this.spotify.pause()
          .then(response => response, error => this.handleError(error));
        } else {
          return this.spotify.play()
          .then(response => response, error => this.handleError(error));
        }
      }, error => console.log(error))
  }

  skipToPrevious = () => {
    return this.spotify.skipToPrevious().then(res => res, error => this.handleError(error));
  }

  skipToNext =() => {
    return this.spotify.skipToNext().then(res => res, error => this.handleError(error));
  }
}
