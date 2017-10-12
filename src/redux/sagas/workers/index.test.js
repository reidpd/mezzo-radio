/*

This file is responsible for hosting tests related to Redux Saga worker functions.

*/

// effects
import { put, all, call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { nextTrackSaga, playbackToggleSaga, playbackStateSaga,
        startAlbumSaga, updateAlbumTracksSaga, albumFocusSaga,
        albumHoverSaga, recordSpinSaga } from './index.js';

describe('WORKER SAGAS - INTEGRATION TESTS', () => {
  describe('recordSpinSaga( action )', () => {
    it('puts a recordSpinToggle.success action with a boolean as its payload', () => {
      const triggerAction = {
        type: 'RECORD_SPIN_TOGGLE_TRIGGER',
        payload: true,
      };
      const successAction = {
        type: 'RECORD_SPIN_TOGGLE_SUCCESS',
        payload: true,
      };
      const promise = expectSaga(recordSpinSaga, triggerAction).put(successAction).run();
      return promise;
    });
  });

  describe('albumFocusSaga( action )', () => {
    it('puts a albumFocus.success action with a an object as its payload', () => {
      const payload = {
        name: 'Bridge Over Troubled Water',
        image: 'image_string',
      };
      const triggerAction = { type: 'ALBUM_FOCUS_TRIGGER', payload };
      const successAction = { type: 'ALBUM_FOCUS_SUCCESS', payload };
      const promise = expectSaga(albumFocusSaga, triggerAction).put(successAction).run();
      return promise;
    });
  });

  describe('albumHoverSaga( action )', () => {
    it('puts a albumHover.success action with a an object as its payload', () => {
      const payload = {
        name: 'Bridge Over Troubled Water',
        image: 'image_string',
      };
      const triggerAction = { type: 'ALBUM_HOVER_TRIGGER', payload };
      const successAction = { type: 'ALBUM_HOVER_SUCCESS', payload };
      const promise = expectSaga(albumHoverSaga, triggerAction).put(successAction).run();
      return promise;
    });
  });

});
