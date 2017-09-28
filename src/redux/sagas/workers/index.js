/*

This is where redux saga worker generator functions live.

*/

// import { delay } from 'redux-saga';
import { put, all, call } from 'redux-saga/effects';
import { search, artistFocus, albumFocus, albumHover,
        startAlbum, setUserInfo, recordSpinToggle,
        playbackToggle, playbackState, nextTrack,
        startTimerAsync, stopTimerAsync, resetTimerAsync,
        setMaxTime, updateAlbumTracks, /*nextTrackCount*/ } from '../../routines'; // importing our routines
import { /*startTimer, stopTimer*/ } from '../../actions';
import SpotifyPromisesClass from '../../../spotify';
const spotifyPromises = new SpotifyPromisesClass();

export function* nextTrackSaga(action) {
  const firstPlaybackState = action.payload.playbackState;
  const skip = action.payload.skip;
  try {
    // let skipPromise;
    // if (skip !== null) {
    //   if (skip === 'next') { skipPromise = spotifyPromises.skipToNext; }
    //   else if (skip === 'prev') { skipPromise = spotifyPromises.skipToPrevious; }
    //   call(skipPromise;
    // }
    let currentPlaybackState = firstPlaybackState;
    // yield put(nextTrackCount.trigger(currentPlaybackState.body.item.track_number + 1))
    yield put(nextTrack.request());
    // the next 4 lines are an API-greedy solution to finding the next duration value: refactor when possible!
    // IN FACT, this is now a bug: must fix later.
    // while (currentPlaybackState.body.item.duration_ms === firstPlaybackState.body.item.duration_ms) {
    //   const promiseMethodOne = spotifyPromises.getPlaybackState;
    //   currentPlaybackState = yield call(promiseMethodOne);
    // }
    // still needs refactoring
    while (currentPlaybackState.body.item.duration_ms === firstPlaybackState.body.item.duration_ms) {
      const promiseMethodOne = spotifyPromises.getPlaybackState;
      currentPlaybackState = yield call(promiseMethodOne);
      if (skip === null) { break }
    }
    yield put(nextTrack.success(currentPlaybackState))
    let payload = { now: new Date().getTime() };
    yield put(resetTimerAsync.success(payload));
    yield put(setMaxTime.trigger(currentPlaybackState.body.item.duration_ms));
    yield put(albumFocus.success(currentPlaybackState.body.item.album));
  } catch(error) { yield put(playbackToggle.failure(error)) }
}

export function* playbackToggleSaga(action) {
  let baseTime = action.payload;
  try {
    const promiseMethodOne = spotifyPromises.getPlaybackState;
    const currentPlaybackState = yield call(promiseMethodOne);
    yield put(playbackToggle.request(currentPlaybackState));
    // const currentPlaybackState = yield* playbackStateSaga(); // for later refactor, saga sequencing
    let promiseMethodTwo, spin_directive;
    if (currentPlaybackState.body.is_playing) {
      promiseMethodTwo = spotifyPromises.pause;
      spin_directive = false;
    } else {
      promiseMethodTwo = spotifyPromises.play;
      spin_directive = true;
      // set playbackInterval to increment progressBar value
    }
    const response = yield call(promiseMethodTwo);
    yield put(playbackToggle.success(response))
    if (spin_directive === true) {
      const payload = { baseTime, now: new Date().getTime() };
      yield put(startTimerAsync.success(payload));
    } else {
      const payload = { now: new Date().getTime() };
      yield put(stopTimerAsync.success(payload));
    }
    yield put(recordSpinToggle.success(spin_directive));

  } catch (error) { yield put(playbackToggle.failure(error)) }
}

export function* playbackStateSaga(action) {
  try {
    yield put(playbackState.request());
    const promiseMethod = spotifyPromises.getPlaybackState;
    const currentPlaybackState = yield call(promiseMethod);
    yield put(playbackState.success(currentPlaybackState));
  } catch(error) { yield put(playbackState.failure(error)) }
}

export function* startAlbumSaga(action) {
  const context_uri = action.payload.context_uri;
  const baseTime = action.payload.elapsed;
  const firstPlaybackState = action.payload.playbackState;
  try {
    yield put(startAlbum.request());
    const startAlbumPromiseMethod = spotifyPromises.startAlbum;
    yield call(startAlbumPromiseMethod, context_uri);
    let currentPlaybackState = firstPlaybackState;
    while (firstPlaybackState.body.item.duration_ms === currentPlaybackState.body.item.duration_ms) {
      const playbackStatePromise = spotifyPromises.getPlaybackState;
      currentPlaybackState = yield call(playbackStatePromise);
    }
    yield put(startAlbum.success(currentPlaybackState));
    yield put(setMaxTime.trigger(currentPlaybackState.body.item.duration_ms));
    const payload = { now: new Date().getTime(), baseTime };
    yield put(resetTimerAsync.success(payload));
  } catch (error) {
    yield put(startAlbum.failure(error))
  }
}

export function* updateAlbumTracksSaga(action) {
  const albumID = action.payload.albumID || action.payload;
  try {
    const promiseMethod = spotifyPromises.getAlbumTracks;
    const response = yield call(promiseMethod, albumID);
    yield put(updateAlbumTracks.success(response));
  } catch (error) {
    yield put(updateAlbumTracks.failure(error));
  }
}

export function* albumFocusSaga(action) {
  try { yield put(albumFocus.success(action.payload)) }
  catch (error) { yield put(albumHover.failure(error)) }
}

export function* albumHoverSaga(action) {
  const albumData = action.payload; // const images = action.payload.images // if (images[0].url.length === 0) { yield delay(1500) }
  try { yield put(albumHover.success(albumData)) }
  catch (error) { yield put(albumHover.failure(error)) }
}

export function* recordSpinSaga(action) {
  try { yield put(recordSpinToggle.success(action.payload)) }
  catch (error) { yield put(recordSpinToggle.failure(error)) }
}

export function* artistFocusSaga(action) {
  const artistId = action.payload.artistId;
  const focusArtistData = action.payload.data;

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

  try {
    // trigger request action
    yield put(search.request());
    // perform request to spotify to fetch some data
    const promiseMethodOne = spotifyPromises.search;
    const search_response = yield call(promiseMethodOne, searchTerm);
    // if request successfully finished
    yield put(search.success(search_response));
    // const artists = search_response.body.
  } catch (error) {
    // if request failed
    yield put(search.failure(error));
  // } finally { // not sure if 'finally' clause is really necessary: found it in original docs pulled from.
  //   // trigger fulfill action
  //   yield put(search.fulfill());
  }
}

export function* setUserInfoSaga(action) {
  try { yield put(setUserInfo.success(action.payload)) }
  catch (error) { yield put(setUserInfo.failure(error)) }
}

// eslint-disable-next-line
export function* apiFailureSaga(action) {
  const error = action.error;
  console.log('apiFailureSaga reports an error: ', error);
}
