import initialState from './initialState';
import {
  SET_USER_INFO,
  SET_TOKENS,
} from '../actions';

export const nowPlayingReducer = (state = initialState.now_playing, action) => {
  switch (action.type) {
    case 'SONG_START':
      return action.payload;
    case 'SONG_END':
      return initialState.now_playing;
    default:
      return state;
  }
};

export const albumsReducer = (state = initialState.albums, action) => {
  switch (action.type) {
    case 'NEW_ALBUMS':
      return action.payload;
    default:
      return state;
  }
};

export const artistsReducer = (state = initialState.artists, action) => {
  switch (action.type) {
    case 'NEW_ARTISTS':
      return action.payload;
    default:
      return state;
  }
};

export const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.payload;
    default:
      return state;
  }
};

export const tokensReducer = (state = initialState.tokens, action) => {
  switch (action.type) {
    case SET_TOKENS:
      return action.payload;
    default:
      return state;
  }
}

// /**
//  * Our reducer
//  */
// export const reduce = (state = initialState, action) => {
//   switch (action.type) {
//   // when we get the tokens... set the tokens!
//   case SPOTIFY_TOKENS:
//     const {accessToken, refreshToken} = action;
//     return Object.assign({}, state, {accessToken, refreshToken});
//
//   // set our loading property when the loading begins
//   case SPOTIFY_ME_BEGIN:
//     return Object.assign({}, state, {
//       user: Object.assign({}, state.user, {loading: true})
//     });
//
//   // when we get the data merge it in
//   case SPOTIFY_ME_SUCCESS:
//     return Object.assign({}, state, {
//       user: Object.assign({}, state.user, action.data, {loading: false})
//     });
//
//   // currently no failure state :(
//   case SPOTIFY_ME_FAILURE:
//     return state;
//
//   default:
//     return state;
//   }
// }
