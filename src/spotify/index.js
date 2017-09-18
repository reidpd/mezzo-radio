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

const spotify = require('../config/spotifyWebApi.js');

export default class SpotifyPromisesClass {
  constructor() { this.spotify = spotify; }

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
    this.spotify.getMyCurrentPlaybackState().then(response => console.log(response), err => console.log(err));
  }

  startAlbum = (context_uri) => {
    return this.spotify.play({context_uri}).then(response => response, err => console.log(err));
  }

  playbackToggle = () => {
    this.spotify.getMyCurrentPlaybackState()
      .then(response => {
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
}

// search = () => {
//   spotify.search('alt', ['album', 'artist', 'track'])
//     .then(data => {
//       console.log('results for spotify.search(alt): ', data)
//     }, err => { console.log('Something went wrong! Your error message is: ', err) });
// }
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
