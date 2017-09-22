/*

This is where redux saga worker generator functions live.

*/

import { delay } from 'redux-saga';
import { put, all, call } from 'redux-saga/effects';
import { search, artistFocus, albumFocus, albumHover, startAlbum, setUserInfo, recordSpinToggle, playbackToggle, } from '../../routines'; // importing our routines
import SpotifyPromisesClass from '../../../spotify';
const spotifyPromises = new SpotifyPromisesClass;

export function* playbackToggleSaga(action) {
  try {
    const promiseMethodOne = spotifyPromises.getPlaybackState;
    const playbackState = yield call(promiseMethodOne);
    yield put(playbackToggle.request(playbackState));
    let promiseMethodTwo;
    if (playbackState.body.is_playing) {
      promiseMethodTwo = spotifyPromises.pause;
    } else { promiseMethodTwo = spotifyPromises.play }
    const response = yield call(promiseMethodTwo);
    yield put(playbackToggle.success(response))
    yield put(recordSpinToggle.success(!playbackState.body.is_playing));
  }
  catch (error) { yield put(playbackToggle.failure(error.message)) }
}

export function* startAlbumSaga(action) {
  const context_uri = action.payload;
  try {
    yield put(startAlbum.request());
    const promiseMethod = spotifyPromises.startAlbum;
    const response = yield call(promiseMethod, context_uri);
    yield put(startAlbum.success(response));
  } catch (error) {
    yield put(startAlbum.failure(error))
  }
}

export function* albumFocusSaga(action) {
  try { yield put(albumFocus.success(action.payload)) }
  catch (error) { yield put(albumHover.failure(error)) }
}

export function* albumHoverSaga(action) {
  const albumData = action.payload;
  const images = action.payload.images
  try {
    // if (images[0].url.length === 0) {
    //   yield delay(1500);
    // }
    yield all([ put(albumHover.success(albumData)) ]);
  }
  catch (error) { yield put(albumHover.failure(error)) }
}

export function* recordSpinSaga(action) {
  try { yield put(recordSpinToggle.success(action.payload)) }
  catch (error) { yield put(recordSpinToggle.failure(error)) }
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
  } catch (error) { yield put(artistFocus.failure(error)) }
}

export function* searchSaga(action) {
  const searchTerm = action.payload.searchTerm;
  // console.log(searchTerm)

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
    yield put(search.failure(error));
  // } finally { // not sure if 'finally' clause is really necessary: found it in original docs pulled from.
  //   // trigger fulfill action
  //   yield put(search.fulfill());
  }
}

export function* setUserInfoSaga(action) {
  console.log(action.payload)
  try { yield put(setUserInfo.success(action.payload)) }
  catch (error) { yield put(setUserInfo.failure(error)) }
}

export function* apiFailureSaga(action) {
  const error = action.error;
  console.log('apiFailureSaga reports an error: ', error);
}
