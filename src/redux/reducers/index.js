/*

This file is responsible for hosting 'redux/reducer' files.
Redux state can only be manipulated by sending actiions to interact with these reducers,
which are combined into a root reducer & placed in the 'redux/store'.

When components are connected to the Redux store, the data contained within
these reducers is lent to their props.

*/

import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import timeReducer from './time';


import initialState from '../initialState';
import {
  // SET_USER_INFO,
  SET_TOKENS,
  SET_ARTISTS,
  SET_ALBUMS,
  // SET_FOCUS_ALBUM,
  // SET_FOCUS_ARTIST,
} from '../actions';
import {
  setUserInfo, recordSpinToggle, search,
  artistFocus, albumFocus, albumHover,
  startAlbum, /* playbackToggle, */ playbackState,
  nextTrack, updateAlbumTracks } from '../routines';

export const recordSpinReducer = (state = false, action) => {
  switch (action.type) {
    case recordSpinToggle.SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export const playbackStateReducer = (state = initialState.now_playing, action) => {
  switch (action.type) {
    // case playbackToggle.SUCCESS:
    //   return action.payload;
    case playbackState.SUCCESS:
      return action.payload;
    case nextTrack.SUCCESS:
      return action.payload;
    case startAlbum.SUCCESS:
      return action.payload;
    case 'SONG_END':
      return initialState.now_playing;
    default:
      return state;
  }
};

export const albumTracksNowPlayingReducer = (state = initialState.albumTracksNowPlaying, action) => {
  switch (action.type) {
    case updateAlbumTracks.SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export const trackNowPlayingReducer = (state = initialState.trackNowPlaying, action) => {
  switch (action.type) {
    case updateAlbumTracks.SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export const trackCountReducer = (state = initialState.trackCount, action) => {
  switch (action.type) {
    case startAlbum.SUCCESS:
      return 0;
    case playbackState.SUCCESS:
      return action.payload.body.item.track_number;
    default:
      return state;
  }
}

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
    case albumFocus.SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export const albumsReducer = (state = initialState.albums, action) => {
  switch (action.type) {
    case search.SUCCESS:
      return action.payload.body.albums;
    case search.FAILURE:
      return initialState.albums;
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
  switch (action.type) {
    case search.TRIGGER:
      return initialState.artists;
    case search.SUCCESS:
      return action.payload.body.artists.items;
    case search.FAILURE:
      return initialState.artists;
    case artistFocus.TRIGGER:
      return state;
    case artistFocus.SUCCESS:
      return action.payload.relatedArtists.body.artists;
    case SET_ARTISTS:
      return action.payload;
    default:
      return state;
  }
};

export const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case setUserInfo.SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const progressBarReducer = (initState = initialState.progressBar, action) => {
  switch (action.type) {
    case playbackState.SUCCESS:
      const state = {
        max: action.payload.body.item.duration_ms,
        value: action.payload.body.progress_ms,
      };
      const payload = { state };
      return payload;
    default:
      return initState;
  }
}

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
  albumTracksNowPlayingReducer,
  trackNowPlayingReducer,
  trackCountReducer,
  playbackStateReducer,
  recordSpinReducer,
  albumHoverReducer,
  albumFocusReducer,
  albumsReducer,
  artistFocusReducer,
  artistsReducer,
  progressBarReducer,
  userReducer,
  tokensReducer,
  timeReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
