/*

This file is responsible for hosting pure action-creator functions
for changing the state of redux reducers with their payload.

*/

// const spotify = require('../../config/spotifyWebApi.js');

// import { createFormAction } from 'redux-form-saga';
// export const search = createFormAction('SEARCH');

// import { createRoutine } from 'redux-saga-routines';

// our constants
// export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
// export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN';
// export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS';
// export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_TOKENS = 'SET_TOKENS';
export const SET_CURRENT_ARTIST = 'SET_CURRENT_ARTIST';
export const SET_CURRENT_ALBUM = 'SET_CURRENT_ALBUM';
export const SET_ARTISTS = 'SET_ARTISTS';
export const SET_ALBUMS = 'SET_ALBUMS';

// export const search = createRoutine('SEARCH');


/** set the app's access and refresh tokens */
export const setTokens = ({access_token, refresh_token, expires_in}) => {
  // if (accessToken) { spotifyApi.setAccessToken(accessToken) }
  return { type: SET_TOKENS, payload: { access_token, refresh_token, expires_in } };
}

// /* get the user's info from the /me api */
// export function getMyInfo() {
//   return dispatch => {
//     dispatch({ type: SPOTIFY_ME_BEGIN});
//     spotifyApi.getMe().then(data => {
//       dispatch({ type: SPOTIFY_ME_SUCCESS, data: data });
//     }).catch(e => {
//       dispatch({ type: SPOTIFY_ME_FAILURE, error: e });
//     });
//   };
// }

export const setUserInfo = (user) => {
  return {
    type: SET_USER_INFO,
    payload: user,
  };
};

// send an object that changes the redux list of artists
export const setArtists = (data) => {
  return {
    type: SET_ARTISTS,
    payload: data
  };
};

// send an object that changes the redux list of albums
export const setAlbums = (data) => {
  return {
    type: SET_ALBUMS,
    payload: data
  };
};

export const setCurrentArtist = (artistId) => {
  return {
    type: SET_CURRENT_ALBUM,
    payload: artistId
  }
}
