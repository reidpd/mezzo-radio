/*

This is the container for all controls to the 'record/player'.

*/

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindRoutineCreators } from 'redux-saga-routines';
import PlayPauseBtn from './play_pause';
import RewindSongBtn from './rewind_song';
import { /*  playbackToggle  */ } from '../../../../redux/routines';
const routines = { /* playbackToggle */ };

const mapStateToProps = state => {
  return { state };
};
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);

class Controls extends Component {
  constructor(props) { super(props) }

  render() {
    return (
      <div>
        Controls
        <PlayPauseBtn />
        <RewindSongBtn />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
