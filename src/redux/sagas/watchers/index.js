/*

This is where redux saga 'watcher' generator functions live.

They pay attention for any actions fired with 'TRIGGER' suffixes,
and activate a corresponding generator upon an instance.

The watcher sagas are the ones exported to the store, where middleware is run through them.
These watcher sagas keep track of the worker sagas,
which enforce a synchronous fashion to async requests, therefore
allowing the code to be easily tested in the future.

*/

import { takeEvery, all } from 'redux-saga/effects';
import { search, artistFocus, albumFocus, albumHover, startAlbum, /* playbackToggle */ } from '../../routines';
import {} from '../../actions';
import { searchSaga, artistFocusSaga, albumHoverSaga, albumFocusSaga, startAlbumSaga, apiFailureSaga /* playbackToggleSaga */ } from '../workers';

// function* playbackToggleWatcherSaga() { yield takeEvery(playbackToggle.TRIGGER, playbackToggleSaga) }
function* startAlbumWatcherSaga() { yield takeEvery(startAlbum.TRIGGER, startAlbumSaga) }
function* albumHoverWatcherSaga() { yield takeEvery(albumHover.TRIGGER, albumHoverSaga) }
function* albumFocusWatcherSaga() { yield takeEvery(albumFocus.TRIGGER, albumFocusSaga) }
function* artistFocusWatcherSaga() { yield takeEvery(artistFocus.TRIGGER, artistFocusSaga) }
function* searchWatcherSaga() { yield takeEvery(search.TRIGGER, searchSaga) }

function* apiFailureWatcherSaga() {
  yield takeEvery(search.FAILURE, apiFailureSaga);
  yield takeEvery(startAlbum.FAILURE, apiFailureSaga);
  // yield takeEvery(albumHover.FAILURE, apiFailureSaga);
  // yield takeEvery(albumFocus.FAILURE, apiFailureSaga);
}

export default function* rootSaga() {
  yield all([
    searchWatcherSaga(),
    artistFocusWatcherSaga(),
    albumHoverWatcherSaga(),
    albumFocusWatcherSaga(),
    startAlbumWatcherSaga(),
    apiFailureWatcherSaga(),
    // playbackToggleWatcherSaga(),
  ])
}
