/*

This file is responsible for hosting 'redux/reducer' files.
Redux state can only be manipulated by sending actiions to interact with these reducers,
which are combined into a root reducer & placed in the 'redux/store'.

When components are connected to the Redux store, the data contained within
these reducers is lent to their props.

*/

import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import initialState from '../initialState';
import {
  SET_USER_INFO,
  SET_TOKENS,
  SET_ARTISTS,
  SET_ALBUMS,
} from '../actions';
import { search, searchRelatedArtists } from '../routines';

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
  console.log(action);
  switch (action.type) {
    case search.TRIGGER:
      return initialState.albums;
    case search.SUCCESS:
      return action.payload.body.albums;
    case search.FAILURE:
      return action.payload;
    case search.FULFILL:
      return action.payload;
    case SET_ALBUMS:
      return action.payload;
    default:
      return state;
  }
};

export const artistsReducer = (state = initialState.artists, action) => {
  console.log(action);
  switch (action.type) {
    case search.TRIGGER:
      return initialState.artists;
    case search.SUCCESS:
      return action.payload.body.artists;
    case search.FAILURE:
      return action.payload;
    case search.FULFILL:
      return action.payload;
    case searchRelatedArtists.TRIGGER:
      return state;
    case searchRelatedArtists.SUCCESS:
      return action.payload.body.artists;
    case SET_ARTISTS:
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

// Final Reducer Combination & Export

const appReducer = combineReducers({
  form: reduxFormReducer,
  nowPlayingReducer,
  albumsReducer,
  artistsReducer,
  // currentArtistReducer,
  userReducer,
  tokensReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
