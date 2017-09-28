/*

This reducer file is critical for tracking the state of time in the app.

There are reducers for keeping track of the following information:

1) The maximum time length of the current track,
2) The current value of progress the track has accrued between beginning & end,
3)

*/

import { combineReducers } from 'redux';
import initialState from '../../initialState';
import { setMaxTime, /*setCurrentTime,*/ startTimerAsync,
        stopTimerAsync, resetTimerAsync } from '../../routines';

const currentTimeReducer = (state = initialState.time, action) => {
  switch (action.type) {
    case "RESET_TIMER":
      return {
        ...state,
        baseTime: 0,
        startedAt: state.startedAt ? action.now : undefined,
        stoppedAt: state.stoppedAt ? action.now : undefined
      };
    case resetTimerAsync.SUCCESS:
      return {
        ...state,
        baseTime: 0,
        startedAt: state.startedAt ? action.payload.now : undefined,
        stoppedAt: state.stoppedAt ? action.payload.now : undefined
      }
    case "START_TIMER":
      return {
        ...state,
        baseTime: action.baseTime,
        startedAt: action.now,
        stoppedAt: undefined
      };
    case startTimerAsync.SUCCESS:
      return {
        ...state,
        baseTime: action.payload.baseTime,
        startedAt: action.payload.now,
        stoppedAt: undefined
      };
    case "STOP_TIMER":
      return {
        ...state,
        stoppedAt: action.now
      };
    case stopTimerAsync.SUCCESS:
      return {
        ...state,
        stoppedAt: action.payload.now
      };
    default:
      return state;
  }
}

const maxTimeReducer = (state = 1000000, action) => {
  switch (action.type) {
    case setMaxTime.TRIGGER:
      return action.payload;
    default:
      return state;
  }
}

// Final Combination & Export

const timeReducer = combineReducers({
  currentTimeReducer,
  maxTimeReducer,
});

export default timeReducer;
