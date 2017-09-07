import { combineReducers } from 'redux';

import { nowPlayingReducer, albumsReducer, artistsReducer, userReducer } from './reducers';

const appReducer = combineReducers({
  nowPlayingReducer,
  albumsReducer,
  artistsReducer,
  userReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
