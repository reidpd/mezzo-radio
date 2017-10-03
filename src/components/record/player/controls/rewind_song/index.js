/*

This component is responsible for housing the button which will give the user the
functionality of rewinding to the beginning of a selected 'track/single'
from the selected 'record/disk' on the 'record/player/platter'.

*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindRoutineCreators } from 'redux-saga-routines';
import { nextTrack } from '../../../../../redux/routines';

import SpotifyPromisesClass from '../../../../../spotify';
const spotifyPromises = new SpotifyPromisesClass();

const mapStateToProps = state => {
  return {
    playbackState: state.playbackStateReducer,
  };
}

const routines = { nextTrack };
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);

class RewindSongBtn extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleClick = () => {
    // const track_number = this.props.playbackState.body.item.track_number || 1;
    // const disc_number = this.props.playbackState.body.item.disc_number || 1;
    // if (track_number > 1 || (track_number === 1 && disc_number > 1)) {
      spotifyPromises.skipToPrevious();
      const payload = {
        skip: 'prev',
        playbackState: this.props.playbackState,
      }
      this.props.nextTrack(payload);
    // }
  }

  render() {
    return (
      <button onClick={this.handleClick}>skipBack</button>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RewindSongBtn);
