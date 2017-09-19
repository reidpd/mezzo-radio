/*

This is where redux saga worker generator functions live.

*/

import { delay } from 'redux-saga';
import { put, all, call } from 'redux-saga/effects';
import { search, artistFocus, albumFocus, albumHover, startAlbum,
/* playbackToggle */ } from '../../routines'; // importing our routines
import SpotifyPromisesClass from '../../../spotify';
const spotifyPromises = new SpotifyPromisesClass;

// export function* playbackToggleSaga(action) {
//   try {
//     yield put(playbackToggle.request());
//     const promiseMethod = spotifyPromises.playbackToggle;
//   }
//   catch (error) { yield put(playbackToggle.failure(error.message)) }
// }

export function* startAlbumSaga(action) {
  const context_uri = action.payload;
  try {
    yield put(startAlbum.request());
    const promiseMethod = spotifyPromises.startAlbum;
    const response = yield call(promiseMethod, context_uri);
    yield put(startAlbum.success(response));
  } catch (error) {
    yield put(startAlbum.failure(error.message))
  }
}

export function* albumFocusSaga(action) {
  try { yield put(albumFocus.success(action.payload)) }
  catch (error) { yield put(albumHover.failure(error.message)) }
}

export function* albumHoverSaga(action) {
  const albumData = action.payload;
  const images = action.payload.images
  try {
    // if (images[0].url.length === 0) {
    //   yield delay(1500);
    // }
    yield put(albumHover.success(albumData))
  }
  catch (error) { yield put(albumHover.failure(error.message)) }
}

export function* artistFocusSaga(action) {
  const artistId = action.payload.artistId;
  const focusArtistData = action.payload.data;
  // console.log(bandId)

  try {
    yield put(artistFocus.request());
    const promiseMethodOne = spotifyPromises.getArtistRelatedArtists;
    const promiseMethodTwo = spotifyPromises.getArtistAlbums;
    const [relatedArtists, albums] = yield all([
      call(promiseMethodOne, artistId), // relatedArtists
      call(promiseMethodTwo, artistId) // albums
    ]);
    yield put(artistFocus.success({ relatedArtists, albums, focusArtistData }));
  } catch (error) { yield put(artistFocus.failure(error.message)) }
}

export function* searchSaga(action) {
  const searchTerm = action.payload.searchTerm;
  console.log(searchTerm)

  try {
    // trigger request action
    yield put(search.request());
    // perform request to spotify to fetch some data
    const promiseMethod = spotifyPromises.search;
    const response = yield call(promiseMethod, searchTerm);
    // if request successfully finished
    yield put(search.success(response));
  } catch (error) {
    // if request failed
    yield put(search.failure(error.message));
  // } finally { // not sure if 'finally' clause is really necessary: found it in original docs pulled from.
  //   // trigger fulfill action
  //   yield put(search.fulfill());
  }
}
