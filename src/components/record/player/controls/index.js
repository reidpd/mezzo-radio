/*

This is the container for all controls to the 'record/player'.

To be clear, this app does not play music directly: it must be done through
Spotify's desktop client.

*/

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindRoutineCreators } from 'redux-saga-routines';
import PlayPauseBtn from './play_pause';
import RewindSongBtn from './rewind_song';
import NextSongBtn from './next_song';
// import VolumeSlider from './volume';
import './main.css';
import { /*  playbackToggle  */ } from '../../../../redux/routines';
const routines = { /* playbackToggle */ };

const mapStateToProps = state => {
  return { state };
};
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);

class Controls extends Component {
  // constructor(props) { super(props) }

  render() {
    return (
      <div className="controls-container">
        <RewindSongBtn className="rewind"/>
        <PlayPauseBtn className="play-pause"/>
        <NextSongBtn className="skip-track"/>
        {/* <VolumeSlider /> */}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
