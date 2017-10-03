/*

This file is responsible for testing Redux reducers related to time.

*/

import expect from 'expect';
import { currentTimeReducer, maxTimeReducer } from './index.js';
import * as routines from '../../routines';
import * as actions from '../../actions';
import initialState from '../../initialState';

describe('TIME REDUCER TESTS', () => {
  let reducer, action;

  describe('currentTimeReducer', () => {
    reducer = currentTimeReducer;
    it('should return initialState');
    it('should return current state with unrecognized routines/actions');
    it('should handle RESET_TIMER action.type');
    it('should handle START_TIMER action.type');
    it('should handle STOP_TIMER action.type');
    it('should handle RESET_TIMER_ASYNC_SUCCESS action.type');
    it('should handle START_TIMER_ASYNC_SUCCESS action.type');
    it('should handle STOP_TIMER_ASYNC_SUCCESS action.type');
  });

  describe('maxTimeReducer', () => {
    reducer = maxTimeReducer;
    it('should return initialState');
    it('should return current state with unrecognized routines/actions');
    it('should handle SET_MAX_TIME_SUCCESS action.type');
  });

});
