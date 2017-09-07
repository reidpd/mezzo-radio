import { combineReducers } from 'redux';

import nowPlayingReducer from './reducers';
import albumsReducer from './reducers';
import artistsReducer from './reducers';
import userReducer from './reducers';

const appReducer = combineReducers({
  nowPlayingReducer,
  albumsReducer,
  artistsReducer,
  userReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
