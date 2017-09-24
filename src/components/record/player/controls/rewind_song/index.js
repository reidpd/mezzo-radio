/*

This component is responsible for housing the button which will give the user the
functionality of rewinding to the beginning of a selected 'track/single'
from the selected 'record/disk' on the 'record/player/platter'.

Its future existence is still TBD.

*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindRoutineCreators } from 'redux-saga-routines';
import { nextTrack } from '../../../../../redux/routines';

import SpotifyPromisesClass from '../../../../../spotify';
const spotifyPromises = new SpotifyPromisesClass();

const mapStateToProps = state => { return { state }; }

const routines = { nextTrack };
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);

class RewindSongBtn extends Component {
  handleClick = () => {
    spotifyPromises.skipToPrevious();
    this.props.nextTrack();
  }

  render() {
    return (
      <button onClick={this.handleClick}>skipBack</button>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RewindSongBtn);
