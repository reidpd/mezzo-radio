/*

This file is responsible for hosting routines used within redux-saga & redux-form.

*/

import { createRoutine } from 'redux-saga-routines';

export const setUserInfo = createRoutine('SET_USER_INFO');
export const search = createRoutine('SEARCH');
export const artistFocus = createRoutine('ARTIST_FOCUS');
export const albumFocus = createRoutine('ALBUM_FOCUS');
export const albumHover = createRoutine('ALBUM_HOVER');
export const startAlbum = createRoutine('START_ALBUM');
export const recordSpinToggle = createRoutine('RECORD_SPIN_TOGGLE');
export const playbackToggle = createRoutine('PLAYBACK_TOGGLE');
export const playbackState = createRoutine('PLAYBACK_STATE');
export const setMaxTime = createRoutine('SET_MAX_TIME');
export const setCurrentTime = createRoutine('SET_CURRENT_TIME');
// export const incrementCurrentTime = createRoutine('INCREMENT_CURRENT_TIME');
export const nextTrack = createRoutine('NEXT_TRACK');
export const startTimerAsync = createRoutine('START_TIMER_ASYNC');
export const stopTimerAsync = createRoutine('STOP_TIMER_ASYNC');
export const resetTimerAsync = createRoutine('RESET_TIMER_ASYNC');
export const updateAlbumTracks = createRoutine('UPDATE_ALBUM_TRACKS');
export const updateTrackNowPlaying = createRoutine('UPDATE_TRACK_NOW_PLAYING');
