/*

This is where redux saga 'watcher' generator functions live.

They pay attention for any actions fired with 'TRIGGER' suffixes,
and activate a corresponding generator upon an instance.

The watcher sagas are the ones exported to the store, where middleware is run through them.
These watcher sagas keep track of the worker sagas,
which enforce a synchronous fashion to async requests, therefore
allowing the code to be easily tested in the future.

*/

// import { effects } from 'redux-saga'
import { takeEvery, all } from 'redux-saga/effects';
import { setUserInfo, search, artistFocus,
        albumFocus, albumHover, startAlbum,
        recordSpinToggle, playbackToggle, playbackState,
        nextTrack } from '../../routines';
// import {} from '../../actions';
import { setUserInfoSaga, searchSaga, recordSpinSaga,
        artistFocusSaga, albumHoverSaga, albumFocusSaga,
        startAlbumSaga, apiFailureSaga, playbackToggleSaga,
        playbackStateSaga, nextTrackSaga } from '../workers';

function* playbackStateWatcherSaga() { yield takeEvery(playbackState.TRIGGER, playbackStateSaga) }

function* playbackToggleWatcherSaga() {
  const effects = [ takeEvery(playbackToggle.TRIGGER, playbackToggleSaga) ];
  yield all([...effects]);
}

function* nextTrackWatcherSaga() { yield takeEvery(nextTrack.TRIGGER, nextTrackSaga) }
function* startAlbumWatcherSaga() { yield takeEvery(startAlbum.TRIGGER, startAlbumSaga) }
function* albumHoverWatcherSaga() { yield takeEvery(albumHover.TRIGGER, albumHoverSaga) }
function* albumFocusWatcherSaga() { yield takeEvery(albumFocus.TRIGGER, albumFocusSaga) }
function* artistFocusWatcherSaga() { yield takeEvery(artistFocus.TRIGGER, artistFocusSaga) }
function* recordSpinWatcherSaga() { yield takeEvery(recordSpinToggle.TRIGGER, recordSpinSaga) }
function* searchWatcherSaga() { yield takeEvery(search.TRIGGER, searchSaga) }
function* setUserInfoWatcherSaga() { yield takeEvery(setUserInfo.TRIGGER, setUserInfoSaga) }

function* apiFailureWatcherSaga() {
  yield takeEvery(search.FAILURE, apiFailureSaga);
  yield takeEvery(startAlbum.FAILURE, apiFailureSaga);
  // yield takeEvery(albumHover.FAILURE, apiFailureSaga);
  // yield takeEvery(albumFocus.FAILURE, apiFailureSaga);
}

export default function* rootSaga() {
  const effects = [
    setUserInfoWatcherSaga(),
    searchWatcherSaga(),
    recordSpinWatcherSaga(),
    artistFocusWatcherSaga(),
    albumHoverWatcherSaga(),
    albumFocusWatcherSaga(),
    startAlbumWatcherSaga(),
    apiFailureWatcherSaga(),
    playbackToggleWatcherSaga(),
    playbackStateWatcherSaga(),
    nextTrackWatcherSaga(),
  ];
  yield all([...effects]);
}
