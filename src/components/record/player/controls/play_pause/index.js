/*

This component is responsible for housing the button that gives the user play/pause functionality for the 'record/player/controls'.

WHEN the button clicked,
  THEN the current 'track/single' within the selected 'album/single' 'record/disk' positioned on top of the 'record/player/platter'
    will either play or pause, depending on what the previous playback state of the user's device.

*/

import React, { Component } from 'react';
import SpotifyPromisesClass from '../../../../../spotify';
const spotifyPromises = new SpotifyPromisesClass;

const PlayPauseBtn = props => {
  return (
    <button onClick={spotifyPromises.playbackToggle}>playbackToggle</button>
  )
}

export default PlayPauseBtn;
