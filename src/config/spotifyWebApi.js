/*

This file is responsible for instantiating the wrapper object that will
repeatedly be called upon to interact with all actions and objects
tied to Spotify.

Browser-based requests will flow from this object, as the necessary
client credentials are tied to it.

All future tokens will be assigned to this instantiation,
and all methods will be derived from the exported object.

*/

const SpotifyWebApiNodeWrapper = require('spotify-web-api-node');
const credentials = require('./auth.js');
const spotify = new SpotifyWebApiNodeWrapper(credentials);

module.exports = spotify;
