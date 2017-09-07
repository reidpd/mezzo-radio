import initialState from './initialState';

const nowPlayingReducer = (state = initialState.now_playing, action) => {
  switch (action.type) {
    case 'SONG_START':
      return action.payload;
    case 'SONG_END':
      return initialState.now_playing;
    default:
      return state;
  }
};

const albumsReducer = (state = initialState.albums, action) => {
  switch (action.type) {
    case 'NEW_ALBUMS':
      return action.payload;
    default:
      return state;
  }
}

const artistsReducer = (state = initialState.artists, action) => {
  switch (action.type) {
    case 'NEW_ARTISTS':
      return action.payload;
    default:
      return state;
  }
}

export default {nowPlayingReducer, albumsReducer, artistsReducer};
