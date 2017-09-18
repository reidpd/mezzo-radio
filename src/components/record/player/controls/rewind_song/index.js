/*

This component is responsible for housing the button which will give the user the
functionality of rewinding to the beginning of a selected 'track/single'
from the selected 'record/disk' on the 'record/player/platter'.

Its future existence is still TBD.

*/

import React from 'react';
import SpotifyPromisesClass from '../../../../../spotify';
const spotifyPromises = new SpotifyPromisesClass;

const RewindSongBtn = props => {
  return (
    <button onClick={spotifyPromises.skipToPrevious}>skipBack</button>
  )
}

export default RewindSongBtn;
