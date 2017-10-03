/*

This file is responsible for hosting testing files related to redux reducers.

*/

import expect from 'expect';
import * as reducers from './index.js';
import * as routines from '../routines';
import * as actions from '../actions';
import initialState from '../initialState';

describe('REDUCER TESTS', () => {
  let reducer, action;

  describe('albumFocusReducer', () => {
    reducer = reducers.albumFocusReducer;
    it('should return initialState');
    it('should return current state with unrecognized routines/actions');
    it('should handle albumFocus.SUCCESS routine');
  });

  describe('albumHoverReducer', () => {
    reducer = reducers.albumHoverReducer;
    it('should return initialState');
    it('should return current state with unrecognized routines/actions');
    it('should handle albumHover.SUCCESS routine');
  });

  describe('albumsReducer', () => {
    reducer = reducers.albumsReducer;
    it('should return initialState');
    it('should return current state with unrecognized routines/actions');
    it('should handle search.SUCCESS routine');
    it('should handle search.FAILURE routine');
    it('should handle artistFocus.SUCCESS routine');
  });

  describe('albumTracksNowPlayingReducer', () => {
    reducer = reducers.albumTracksNowPlayingReducer;
    it('should return initialState');
    it('should return current state with unrecognized routines/actions');
    it('should handle updateAlbumTracks.SUCCESS routine');
  });

  describe('artistFocusReducer', () => {
    reducer = reducers.artistFocusReducer;
    it('should return initialState');
    it('should return current state with unrecognized routines/actions');
    it('should handle search.SUCCESS routine');
    it('should handle artistFocus.TRIGGER routine');
    it('should handle artistFocus.REQUEST routine');
    it('should handle artistFocus.SUCCESS routine');
  });

  describe('artistsReducer', () => {
    reducer = reducers.artistsReducer;
    it('should return initialState');
    it('should return current state with unrecognized routines/actions');
    it('should handle search.TRIGGER routine');
    it('should handle search.SUCCESS routine');
    it('should handle search.FAILURE routine');
    it('should handle artistFocus.TRIGGER routine');
    it('should handle artistFocus.SUCCESS routine');
  });

  describe('playbackStateReducer', () => {
    reducer = reducers.playbackStateReducer;
    it('should return initialState');
    it('should return current state with unrecognized routines/actions');
    it('should handle playbackState.SUCCESS routine');
    it('should handle nextTrack.SUCCESS routine');
    it('should handle startAlbum.SUCCESS routine');
  });

  describe('recordSpinReducer', () => {
    reducer = reducers.recordSpinReducer;
    console.log(reducer);
    xit('should return initialState', () => {
      expect(reducer(undefined, { type: 'does not have one' })).toEqual(initialState.recordSpinToggle);
    });
    xit('should handle recordSpinToggle.SUCCESS routine', () => {});

  });

  describe('tokensReducer', () => {
    reducer = reducers.tokensReducer;
    xit('should return initialState', () => {
      expect(reducer([], undefined)).toEqual(initialState.tokens);
    });
    xit('should handle SET_TOKENS action', () => {
      let payload = { access_token: '12345678', refresh_token: '0987654321' };
      expect(reducer([], { type: 'SET_TOKENS', payload })).toEqual(payload);
    });
  });

  describe('trackNowPlayingReducer', () => {
    reducer = reducers.trackNowPlayingReducer;
    it('should return initialState');
    it('should return current state with unrecognized routines/actions');
    it('should handle updateAlbumTracks.SUCCESS routine');
  });

  describe('userReducer', () => {
    reducer = reducers.userReducer;
    xit('should return initialState', () => {
      expect(reducer([], undefined)).toEqual(initialState.user);
    });
    xit('should handle setUserInfo.SUCCESS routines', () => {
      let userPayload = { name: 'Benjamin', age: 26 };
      expect(reducer([], routines.setUserInfo.success(userPayload))).toEqual(userPayload);
    });
  });

});
