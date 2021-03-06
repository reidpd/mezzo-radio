import 'babel-polyfill';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import formActionSaga from 'redux-form-saga';
import { routinesWatcherSaga } from 'redux-saga-routines';

import rootReducer from '../reducers';
import rootSaga from '../sagas/watchers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);

const sagas = [rootSaga, formActionSaga, routinesWatcherSaga];

sagas.forEach(saga => sagaMiddleware.run(saga));

export default store;
