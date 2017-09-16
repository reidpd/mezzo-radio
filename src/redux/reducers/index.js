import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { nowPlayingReducer, albumsReducer, artistsReducer, userReducer, tokensReducer } from './reducers.js';

const appReducer = combineReducers({
  form: reduxFormReducer,
  nowPlayingReducer,
  albumsReducer,
  artistsReducer,
  userReducer,
  tokensReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
