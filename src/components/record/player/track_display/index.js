/*

This file is responsible for housing the presentational display of whatever track is currently playing.

*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindRoutineCreators } from 'redux-saga-routines';
import {} from '../../../../redux/routines';

import Track from '../../../lists/by/track/single';

const mapStateToProps = state => {
  return {
    playbackState: state.playbackStateReducer,
    albumTracks: state.albumTracksNowPlayingReducer,
    trackCount: state.trackCountReducer,
  };
};

const routines = {};
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);

class TrackDisplay extends Component {
  constructor(props) {
    super(props);
    this.trackData = this.props.albumTracks.body.items[this.props.trackCount-1];
    console.log('this.trackData === ', this.trackData);
  }

  handleData = () => {
    const albumTracks = this.props.albumTracks.body.items;
    const trackIdx = this.props.trackCount - 1;
    const track = albumTracks[trackIdx];
    return track;
  }

  render() {
    return (
      <div className="track-display-container">
        <Track data={this.handleData()}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackDisplay);
