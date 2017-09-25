/*

This file is responsible for housing the presentational display of whatever track is currently playing.

*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindRoutineCreators } from 'redux-saga-routines';
import {} from '../../../../redux/routines';

import Track from '../../../lists/by/track/single';

const mapStateToProps = state => {
  return { playbackState: state.nowPlayingReducer };
};

const routines = {};
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);

class TrackDisplay extends Component {
  render() {
    console.log(this.props.playbackState)
    return (
      <div className="track-display-container">
        <p>Track Display</p>
        <Track data={this.props.playbackState} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackDisplay);
