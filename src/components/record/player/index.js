/*

This component is responsible for housing the presentational record player.

It primarily renders the container div styled after the player of choice (tbd), whose critical inner components include:

  - A 'record/player/platter' where a selected 'record/disk' will be placed/removed in between active musical selections.
  - A 'record/player/needle' that dynamically moves depending on situational context (see component for more),
  - And 'record/player/controls' for sound manipulation features necessary for a good time :-) .

*/

import './main.css';
import React, { Component } from 'react';
import Platter from './platter';
// import Needle from './needle';
import { connect } from 'react-redux';
import Controls from './controls';
import { bindRoutineCreators } from 'redux-saga-routines';
const routines = { /* playbackToggle */ };


const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);

class RecordPlayer extends Component {
  // constructor(props) { super(props) }

  playbackToggle = () => {
    // this.props.playbackToggle();
  }

  render() {
    return (
      <div className="record-player-container">
        <div className="record-player-square">
          <div className="platter-side">
            <Platter />
          </div>
          <div className="needle-side">
            {/* <Needle /> */}
          </div>
        </div>
        <div className="record-player-controls-container">
          <Controls />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordPlayer);
