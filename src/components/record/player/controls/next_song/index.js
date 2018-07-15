/*

This component is responsible for housing the button which will give the user the
functionality of skipping forward to the beginning of the following track
after a selected 'track/single' from the selected 'record/disk' on the 'record/player/platter'.

Its future existence is still TBD.

*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindRoutineCreators } from 'redux-saga-routines';
import SpotifyPromisesClass from '../../../../../spotify';
import { nextTrack } from '../../../../../redux/routines';

import '../../main.css';

const spotifyPromises = new SpotifyPromisesClass();

const mapStateToProps = state => {
  return {
    playbackState: state.playbackStateReducer
  };
}

const routines = { nextTrack };
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);

class NextSongBtn extends Component {
  handleClick = () => {
    const payload = {
      skip: 'next',
      playbackState: this.props.playbackState,
    };
    spotifyPromises.skipToNext();
    this.props.nextTrack(payload);
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        <img src={require('../../../../../images/new_images/forward_button.svg')} className="controls-btn"/>
      </button>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NextSongBtn);
