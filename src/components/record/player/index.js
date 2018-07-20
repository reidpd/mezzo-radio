/*

This component is responsible for housing the presentational record player.

It primarily renders the container div styled after the player of choice (tbd), whose critical inner components include:

  - A 'record/player/platter' where a selected 'record/disk' will be placed/removed in between active musical selections.
  - A 'record/player/needle' that dynamically moves depending on situational context (see component for more),
  - And 'record/player/controls' for sound manipulation features necessary for a good time :-) .

*/

// Boilerplate
import './main.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindRoutineCreators } from 'redux-saga-routines';

// Components
import Platter from './platter';
import Needle from './needle';
import Controls from './controls';
import ProgressBar from './controls/progress';
import TrackDisplay from './track_display';

// Redux
const mapStateToProps = state => state;
const routines = { /* playbackToggle */ };
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);

class RecordPlayer extends Component {
  render() {
    return (
      <div className="record-player-container">
        <div className="record-player-square">
          <div className="platter-side">
            <Platter />
          </div>
          <div className="needle-side">
            <Needle />
          </div>
        </div>
        <div className="record-player-track-display-container">
          <TrackDisplay />
        </div>
        <div className="record-player-controls-container">
          <Controls className="controls"/>
          <ProgressBar className="progress" />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordPlayer);
