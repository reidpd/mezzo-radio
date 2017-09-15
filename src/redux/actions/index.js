/*

This file is responsible for hosting pure action-creator functions
for changing the state of redux reducers with their payload.

*/

// const spotify = require('../../config/spotifyWebApi.js');
import { createFormAction } from 'redux-form-saga';
// our constants
// export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
// export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN';
// export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS';
// export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_TOKENS = 'SET_TOKENS';

export const searchBarSubmit = createFormAction('SEARCH');

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
