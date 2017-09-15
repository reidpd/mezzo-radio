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
