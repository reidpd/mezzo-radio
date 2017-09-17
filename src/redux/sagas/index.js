// /*
//
// This file is responsible for hosting 'redux/saga's.
//
// There are two kinds of sagas: 'watcher' sagas, and 'worker' sagas.
//
// The watcher sagas are the ones exported to the store, where middleware is run through them.
// These watcher sagas keep track of the worker sagas,
// which enforce a synchronous fashion to async requests, therefore
// allowing the code to be easily tested in the future.
//
// */
//
// import { delay } from 'redux-saga';
// import { put, takeEvery, all, call } from 'redux-saga/effects';
// import { SubmissionError } from 'redux-form';
// import { search, artistFocus, albumFocus, albumHover } from '../routines'; // importing our routines
// import { setHoverAlbum, setFocusAlbum } from '../actions';
// import SpotifyPromisesClass from '../../spotify';
// const spotifyPromises = new SpotifyPromisesClass;
//
// function* albumHoverWatcherSaga() { yield takeEvery(albumHover.TRIGGER, albumHoverSaga); }
//
// function* albumHoverSaga(action) {
//   const albumData = action.payload;
//   try { yield put(albumHover.success(albumData)) }
//   catch (error) { yield put(albumHover.failure(error.message)) }
// }
//
// function* artistFocusWatcherSaga() { yield takeEvery(artistFocus.TRIGGER, artistFocusSaga) }
//
// function* artistFocusSaga(action) {
//   const artistId = action.payload.artistId;
//   const focusArtistData = action.payload.data;
//   // console.log(bandId)
//
//   try {
//     yield put(artistFocus.request());
//     const promiseMethodOne = spotifyPromises.getArtistRelatedArtists;
//     const promiseMethodTwo = spotifyPromises.getArtistAlbums;
//     const [relatedArtists, albums] = yield all([
//       call(promiseMethodOne, artistId), // relatedArtists
//       call(promiseMethodTwo, artistId) // albums
//     ]);
//     yield put(artistFocus.success({ relatedArtists, albums, focusArtistData }));
//   } catch (error) { yield put(artistFocus.failure(error.message)) }
// }
//
// function* searchWatcherSaga() { yield takeEvery(search.TRIGGER, searchSaga) }
//
// function* searchSaga(action) {
//   const searchTerm = action.payload.searchTerm;
//
//   try {
//     // trigger request action
//     yield put(search.request());
//     // perform request to spotify to fetch some data
//     console.log(searchTerm);
//     const promiseMethod = spotifyPromises.search;
//     console.log('promiseMethod === ', promiseMethod);
//     const response = yield call(promiseMethod, searchTerm);
//     console.log('response === ', response)
//     // if request successfully finished
//     yield put(search.success(response));
//   } catch (error) {
//     // if request failed
//     yield put(search.failure(error.message));
//   // } finally { // not sure if 'finally' clause is really necessary: found it in original docs pulled from.
//   //   // trigger fulfill action
//   //   yield put(search.fulfill());
//   }
// }
//
// // single entry point to start all Sagas at once
// export default function* rootSaga() {
//   yield all([
//     searchWatcherSaga(),
//     artistFocusWatcherSaga(),
//     albumHoverWatcherSaga(),
//   ])
// }
