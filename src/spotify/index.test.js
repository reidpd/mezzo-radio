/*

This file is responsible for hosting tests related to Spotify API promises fulfilled via the spotify-web-api-node library.

*/

import expect from 'expect';
import SpotifyPromisesClass from './index.js';

describe('SPOTIFY_PROMISES_CLASS TESTS', () => {
  describe('#handleError', () => {
    it('WHEN error.statusCode === 401, THEN it should assign the window to a backend route that refreshes the token');
    it('WHEN error.statusCode !== 401, THEN the error is logged to the console.');
  });

  describe('#getMe', () => {
    it('WHEN this function is called, a promise is resolved or rejected containing user information')
  });

  describe('#getAlbumTracks', () => {
    it('WHEN called, THEN it returns a promise that is resolved || rejected');
    it('AND the data resolved is pertinent to album tracks');
  });

  describe('#search', () => {
    it('WHEN called, THEN it returns a promise');
    it('AND the data resolved yields both album and artist search results');
  });

  describe('#getArtistRelatedArtists', () => {
    it('WHEN called, THEN it returns a promise');
    it('AND the data resolved contains related artists to the artistId given');
  });

  describe('#getArtistAlbums', () => {
    it('WHEN called, THEN it returns a promise');
    it('AND the data resolved contains albums associated with the artistId given');
  });

  describe('#getArtistAlbumsWithTracks', () => {
    it('WHEN called, THEN it returns a promise');
    it('AND the data resolved contains not only albums, but all tracks for each album associated with the artistId given');
  });

  describe('#getPlaybackState', () => {
    it('WHEN called, THEN it returns a promise');
    it('AND the data resolved contains an object containing information pertinent to the current playback state of the Spotify client activated');
  });

  describe('#startAlbum', () => {
    it('WHEN called, THEN it returns a promise');
    it('AND the data resolved is a paging object for the Spotify client, with "null" as the body');
  });

  describe('#play', () => {
    it('WHEN called, THEN it returns a promise');
    it('AND the data resolved is a paging object for the Spotify client, with "null" as the body');
  });

  describe('#pause', () => {
    it('WHEN called, THEN it returns a promise');
    it('AND the data resolved is a paging object for the Spotify client, with "null" as the body');
  });

  describe('#playbackToggle', () => {
    it('WHEN called, THEN it returns a promise');
    it('AND the data resolved is a paging object for the Spotify client, with "null" as the body');
  });

  describe('#skipToPrevious', () => {
    it('WHEN called, THEN it returns a promise');
    it('AND the data resolved is a paging object for the Spotify client, with "null" as the body');
  });

  describe('#skipToNext', () => {
    it('WHEN called, THEN it returns a promise');
    it('AND the data resolved is a paging object for the Spotify client, with "null" as the body');
  });

});
