/*

This file is responsible for hosting pure, *synchronous* action-creator functions
for changing the state of 'redux/reducer' files with their payload.

*/

// our constants
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_TOKENS = 'SET_TOKENS';
export const SET_FOCUS_ARTIST = 'SET_FOCUS_ARTIST';
export const SET_ARTISTS = 'SET_ARTISTS';
export const SET_ALBUMS = 'SET_ALBUMS';
export const SET_HOVER_ALBUM = 'SET_HOVER_ALBUM';
export const SET_FOCUS_ALBUM = 'SET_FOCUS_ALBUM';
// export const INCREMENT_CURRENT_TIME = 'INCREMENT_CURRENT_TIME';


/** set the app's access and refresh tokens */
export const setTokens = ({access_token, refresh_token, expires_in}) => {
  // if (accessToken) { spotifyApi.setAccessToken(accessToken) }
  return { type: SET_TOKENS, payload: { access_token, refresh_token, expires_in } };
}

/*  Create action {} containing user information  */
export const setUserInfo = payload => {
  return { type: SET_USER_INFO, payload };
}

// send an object that changes the redux list of artists
export const setArtists = payload => {
  return { type: SET_ARTISTS, payload };
}

// send an object that changes the redux list of albums
export const setAlbums = payload => {
  return { type: SET_ALBUMS, payload };
}

export const setHoverAlbum = payload => {
  return { type: SET_HOVER_ALBUM, payload };
}
export const setFocusAlbum = payload => {
  return { type: SET_FOCUS_ALBUM, payload };
}
export const setFocusArtist = payload => {
  return { type: SET_FOCUS_ARTIST, payload };
}

export const startTimer = (baseTime = 0) => {
  return {
    type: "START_TIMER",
    baseTime,
    now: new Date().getTime()
  };
}

export const stopTimer = () => {
  return {
    type: "STOP_TIMER",
    now: new Date().getTime()
  };
}

export const resetTimer = () => {
  return {
    type: "RESET_TIMER",
    now: new Date().getTime()
  }
}

// export const incrementCurrentTime = payload => {
//   return { type: INCREMENT_CURRENT_TIME, payload };
// }
