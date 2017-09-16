import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { search } from '../routines'; // importing our routines
// import spotify from '../../config/spotifyWebApi.js'
import SpotifyPromisesClass from '../../spotify';
// const spotify = require('../../config/spotifyWebApi.js');
const spotifyPromises = new SpotifyPromisesClass;

console.log(call)

function* searchWatcherSaga() {
  yield takeEvery(search.TRIGGER, handleSearchSaga); // see details what is REQUEST param below
}

function* handleSearchSaga(action) {
  const searchTerm = action.payload.searchTerm;

  try {
    // trigger request action
    yield put(search.request());
    // perform request to spotify to fetch some data
    console.log(searchTerm);
    const promiseMethod = spotifyPromises.search;
    console.log('promiseMethod === ', promiseMethod);
    const response = yield call(promiseMethod, searchTerm);
    console.log('response === ', response)
    // if request successfully finished
    yield put(search.success(response));
  } catch (error) {
    // if request failed
    yield put(search.failure(error.message));
  // } finally {
  //   // trigger fulfill action
  //   yield put(search.fulfill());
  }
}

function* helloSaga() {
  console.log('Hello Sagas!')
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    searchWatcherSaga(),
  ])
}
