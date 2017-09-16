import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { search } from '../actions'; // importing our action
// import spotify from '../../config/spotifyWebApi.js'
import SpotifyPromisesClass from '../../spotify';
// const spotify = require('../../config/spotifyWebApi.js');
const spotifyPromises = new SpotifyPromisesClass;

function* searchWatcherSaga() {
  yield takeEvery(search.REQUEST, handleSearchSaga); // see details what is REQUEST param below
}

function* handleSearchSaga(action) {
  const { search } = action.payload;

  try {
    yield call(spotifyPromises.search, { search }); // calling our api method
    // it should return promise
    // promise should be resolved if login successfull
    // or rejected if login credentials is wrong

    // so if spotifyPromises promise resolved, then we can notify our form about successful response
    yield put(search.success());
    // do something else here ...
  } catch (error) {
    // if apiClient promise rejected, then we will be here
    // we need mark form as failed and pass errors to it
    /* FOR MY APP, THIS MEANS: Give the user a message indicating their search didn't yield any ${things}. */
    const formError = new SubmissionError({
      search: 'Artists with this name were not found', // specific field error
      _error: "We couldn't find any artists or genres by that name: please try again with a new search.", // global form error
    });

    yield put(search.failure(formError));
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
