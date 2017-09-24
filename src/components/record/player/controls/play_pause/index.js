/*

This component is responsible for housing the button that gives the user play/pause functionality for the 'record/player/controls'.

WHEN the button clicked,
  THEN the current 'track/single' within the selected 'album/single' 'record/disk' positioned on top of the 'record/player/platter'
    will either play or pause, depending on what the previous playback state of the user's device.

*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindRoutineCreators } from 'redux-saga-routines';
import { playbackToggle, playbackState, /* recordSpinToggle */ } from '../../../../../redux/routines';
// import SpotifyPromisesClass from '../../../../../spotify';
// const spotifyPromises = new SpotifyPromisesClass();
// import store from '../../../../../redux/store';
// const { getState, dispatch } = store;


const mapStateToProps = state => {
  return { state };
}

const routines = { playbackToggle, playbackState };
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);

class PlayPauseBtn extends Component {
  handleClick = () => {
    // this.props.playbackState();
    this.props.playbackToggle();
  }

  render() {
    return (
      <button onClick={this.handleClick}>playbackToggle</button>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPauseBtn);

// const PlayPauseBtn = props => {
//   this.handleClick = () => {
//     spotifyPromises.playbackToggle;
//     const playbackStatus = getState().recordSpinReducer;
//     dispatch(recordSpinToggle.trigger(!playbackStatus));
//   }
//
//   return (
//     <button onClick={this.handleClick}>playbackToggle</button>
//   )
// }
//
// export default PlayPauseBtn;
