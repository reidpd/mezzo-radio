/*

This component is responsible for housing the progress bar that gives the user rewind/fast-forward functionality for the 'record/player/controls'.

NOTE: Introducing a progress bar instead of normal 'rewind/fast-forward' will be intentional, as the choice better reflects the usage of an actual record player.

The quantity of the slider at any given moment represents how far along the 'record/disk' on the 'record/player/platter'
has proceeded from its beginning (0% value, left-most side) to its end (100% value, right-most side).

WHEN a 'track/single' is playing, THEN the progress bar will slowly move from left to right.
WHEN a 'track/single' is paused, THEN the progress bar will remain motionless.

WHEN a new 'album/single' is clicked, THEN the progress bar value will revert to its default, left-most side position.

*/

import './main.css';
import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { bindRoutineCreators } from 'redux-saga-routines';
import { startTimer, stopTimer, resetTimer } from '../../../../../redux/actions';
import { nextTrack } from '../../../../../redux/routines';

const actions = { startTimer, stopTimer, resetTimer };
const routines = { nextTrack };
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
    routines: bindRoutineCreators(routines, dispatch)
  }
};
const mapStateToProps = state => {
  return {
    reducerState: {
      currentTime: state.timeReducer.currentTimeReducer,
      maxTime: state.timeReducer.maxTimeReducer
    }
  }
}

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max: this.props.max,
      value: this.props.value,
    };
  };

  componentDidMount() {
    this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval || 33);
  }

  componentDidUpdate() {
    const { baseTime, startedAt, stoppedAt } = this.props.reducerState.currentTime;
    if (!baseTime && !startedAt && !stoppedAt) {

    } else {
      const progress_ms = this.getElapsedTime(baseTime, startedAt, stoppedAt);
      const max_ms = this.props.reducerState.maxTime;
      if (progress_ms >= max_ms) {
        this.props.routines.nextTrack();
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleChange = (event, value) => {
    console.log(value);
    // this.setState({ value });
    // change spotify timeline
  }

  getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {
    if (!startedAt) {
      return 0;
    } else {
      return stoppedAt - startedAt + baseTime;
    }
  }

  render() {
    const { baseTime, startedAt, stoppedAt } = this.props.reducerState.currentTime;
    const elapsed = this.getElapsedTime(baseTime, startedAt, stoppedAt);
    return (
      <div className="progress-slider-container">
        <Slider
          className="progress-slider"
          min={0}
          max={this.props.reducerState.maxTime}
          defaultValue={elapsed}
          value={elapsed}
          onChange={this.handleChange}
        />
        <p>
          <span>The Value of this slider is </span>
          <span>{elapsed}</span>
        </p>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
