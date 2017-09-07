import { combineReducers } from 'redux';

import nowPlayingReducer from './reducers';
import albumsReducer from './reducers';
import artistsReducer from './reducers';

const appReducer = combineReducers({
  nowPlayingReducer,
  albumsReducer,
  artistsReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
