/*

This is where redux saga worker generator functions live.

*/

import { put, all, call } from 'redux-saga/effects';
import { search, artistFocus, albumFocus, albumHover } from '../../routines'; // importing our routines
import SpotifyPromisesClass from '../../../spotify';
const spotifyPromises = new SpotifyPromisesClass;

export function* albumHoverSaga(action) {
  const albumData = action.payload;
  try { yield put(albumHover.success(albumData)) }
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
  // } finally { // not sure if 'finally' clause is really necessary: found it in original docs pulled from.
  //   // trigger fulfill action
  //   yield put(search.fulfill());
  }
}
