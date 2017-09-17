/*

This file is responsible for hosting routines used within redux-saga & redux-form.

*/

import { createRoutine } from 'redux-saga-routines';

export const search = createRoutine('SEARCH');
export const artistFocus = createRoutine('ARTIST_FOCUS');
export const albumFocus = createRoutine('ALBUM_FOCUS');
export const albumHover = createRoutine('ALBUM_HOVER');
