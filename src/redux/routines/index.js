/*

This file is responsible for hosting routines used within redux-saga & redux-form.

*/

import { createRoutine } from 'redux-saga-routines';

export const search = createRoutine('SEARCH');
export const searchRelatedArtists = createRoutine('SEARCH_RELATED_ARTISTS');
