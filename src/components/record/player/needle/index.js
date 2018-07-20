/*

This is where the needle component for the 'record/player' will live.

*/

import './main.css';
import React, { Component } from 'react';
import { bindRoutineCreators } from 'redux-saga-routines';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NeedleImg from './img/turntable-clipart-bachs-turntable.svg';

import {} from '../../../../redux/routines';

const routines = {};
const mapDispatchToProps = dispatch => {
  return bindRoutineCreators(routines, dispatch);
}

const mapStateToProps = state => {
  return {
    reducerState: {
      currentTime: state.timeReducer.currentTimeReducer,
      maxTrackTime: state.timeReducer.maxTrackTimeReducer,
      maxRecordTime: state.timeReducer.maxRecordTimeReducer,
      playbackState: state.playbackStateReducer,
      albumTracks: state.albumTracksNowPlayingReducer,
    }
  };
}

class Needle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max: this.props.max,
      value: this.props.value,
    };
  };

  componentDidUpdate() {
    const { baseTime, startedAt, stoppedAt } = this.props.reducerState.currentTime;
    if (!baseTime && !startedAt && !stoppedAt) {
//     do nothing
    } else {
      const progress_ms = this.getElapsedTime(baseTime, startedAt, stoppedAt);
      const max_ms = this.props.reducerState.maxTrackTime;
      // if (progress_ms >= max_ms-500) {
      //   const payload = {
      //     skip: null,
      //     playbackState: this.props.reducerState.playbackState,
      //   }
      //   this.props.routines.nextTrack(payload);
      // }
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval || 33);
  }
  componentWillUnmount() { clearInterval(this.interval) }

  getElapsedTime = (baseTime, startedAt, stoppedAt = new Date().getTime()) => {
    if (!startedAt) {
      return 0;
    } else {
      return stoppedAt - startedAt + baseTime;
    }
  }

  styleStr = (timebasics) => {
    const { baseTime, startedAt, stoppedAt } = timebasics;
    const progress_ms = this.getElapsedTime(baseTime, startedAt, stoppedAt);
    const max_ms = this.props.reducerState.maxRecordTime;
    const degree = this.getSkew(progress_ms, max_ms);
    console.log('degree === ', degree);
    return degree;
  }

  recordSkew = () => {
    let currentTrackInfo = this.props.reducerState.playbackState.body.item;
    const albumTracks = this.props.reducerState.albumTracks.body.items;
    console.log(albumTracks);
    const indexes = { track: currentTrackInfo.track_number, disc: currentTrackInfo.disc_number };
    let track_lengths = [], i = 0;
    while (albumTracks[i].disc_number !== indexes.disc) { i++; }
    const startIdx = i;
    while (albumTracks[i].disc_number === indexes.disc && albumTracks[i].track_number !== indexes.track_number) {
      track_lengths[i-startIdx] = albumTracks[i].duration_ms;
      i++;
    }
    console.log(i);
    if (track_lengths.length === 0) { return 15 } else {
      const prior_record_duration = track_lengths.reduce((a,b)=>a+b) + this.getElapsedTime(...this.props.reducerState.currentTime);
      const deg = this.getSkew(prior_record_duration, this.props.reducerState.maxRecordTime);
      return deg;
    }

  }

  getSkew = (elapsedTime, maxTime) => {
    const fraction = elapsedTime / maxTime;
    const addition = 20 * fraction;
    return (15+addition);
  }
  render() {
    const { baseTime, startedAt, stoppedAt } = this.props.reducerState.currentTime;
    const progress_ms = this.getElapsedTime(baseTime, startedAt, stoppedAt);
    const max_ms = this.props.reducerState.maxRecordTime;
    // const degree = this.recordSkew();
    // console.log('skewVar === ', degree);
    return (
      <div className="needle-component-container">
        <div className="needle-base">
          <div className="needle" style={{transform: 'rotate(' + 15 + 'deg)'}}/*style={{transform:rotate( + degree + deg)}}*/></div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Needle);
