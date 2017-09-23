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
import { bindRoutineCreators } from 'redux-saga-routines';
import {} from '../../../../../redux/routines';

const routines = {};
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);
const mapStateToProps = state => {
  return {
    stateVals: {
      max: state.progressBarReducer.state.max,
      value: state.progressBarReducer.state.value,
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

  handleChange = (event, value) => {
    this.setState({value});
    // change spotify timeline
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    console.log(this.props);
    return (
      <div className="progress-slider-container">
        <Slider
          className="progress-slider"
          min={0}
          max={this.props.stateVals.max}
          defaultValue={this.props.stateVals.value}
          value={this.props.stateVals.value}
          onChange={this.handleChange}
        />
        <p>
          <span>The Value of this slider is </span>
          <span>{this.props.stateVals.value}</span>
        </p>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
