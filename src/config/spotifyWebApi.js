const SpotifyWebApiNodeWrapper = require('spotify-web-api-node');
const credentials = require('./auth.js');
const spotify = new SpotifyWebApiNodeWrapper(credentials);

module.exports = spotify;
