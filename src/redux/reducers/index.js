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
  SET_FOCUS_ALBUM,
  SET_FOCUS_ARTIST,
} from '../actions';
import { search, artistFocus, albumFocus, albumHover } from '../routines';

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

export const albumHoverReducer = (state = initialState.albumHover, action) => {
  switch (action.type) {
    case albumHover.SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export const albumFocusReducer = (state = initialState.albumFocus, action) => {
  switch (action.type) {
    // case
    default:
      return state;
  }
}

export const albumsReducer = (state = initialState.albums, action) => {
  // console.log(action);
  switch (action.type) {
    case search.TRIGGER:
      return initialState.albums;
    case search.SUCCESS:
      return action.payload.body.albums;
    case search.FAILURE:
      return initialState.albums;
    // case search.FULFILL:
    //   return action.payload;
    case artistFocus.SUCCESS:
      return action.payload.albums.body;
    case SET_ALBUMS:
      return action.payload;
    default:
      return state;
  }
};

export const artistFocusReducer = (state = initialState.artistFocus, action) => {
  switch (action.type) {
    case search.SUCCESS:
      return action.payload.body.artists.items[0];
    // case SET_FOCUS_ARTIST:
    //   return action.payload;
    case artistFocus.TRIGGER:
      return initialState.artistFocus;
    case artistFocus.REQUEST:
      return initialState.artistFocus;
    case artistFocus.SUCCESS:
      return action.payload.focusArtistData;
    default:
      return state;
  }
};

export const artistsReducer = (state = initialState.artists, action) => {
  // console.log(action);
  switch (action.type) {
    case search.TRIGGER:
      return initialState.artists;
    case search.SUCCESS:
      return action.payload.body.artists.items;
    case search.FAILURE:
      return initialState.artists;
    // case search.FULFILL:
    //   return action.payload;
    case artistFocus.TRIGGER:
      return state;
    case artistFocus.SUCCESS:
      console.log(action.payload.relatedArtists.body.artists);
      return action.payload.relatedArtists.body.artists;
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
  albumHoverReducer,
  albumFocusReducer,
  albumsReducer,
  artistFocusReducer,
  artistsReducer,
  userReducer,
  tokensReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
