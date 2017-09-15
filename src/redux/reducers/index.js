import { combineReducers } from 'redux';

import { nowPlayingReducer, albumsReducer, artistsReducer, userReducer, tokensReducer } from './reducers';

const appReducer = combineReducers({
  nowPlayingReducer,
  albumsReducer,
  artistsReducer,
  userReducer,
  tokensReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
