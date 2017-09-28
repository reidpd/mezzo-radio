require('dotenv').config();
const clientId = process.env.SPOTIFY_CLIENT_ID || process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const redirectUri = process.env.SPOTIFY_CALLBACK_URL || process.env.REACT_APP_SPOTIFY_CALLBACK_URL;
console.log(process.env);

const credentials = { clientId, clientSecret, redirectUri, passReqToCallback: true };

module.exports = credentials;
