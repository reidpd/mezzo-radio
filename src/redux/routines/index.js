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
