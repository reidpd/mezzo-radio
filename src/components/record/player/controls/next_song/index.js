/*

This component is responsible for housing the button which will give the user the
functionality of skipping forward to the beginning of the following track
after a selected 'track/single' from the selected 'record/disk' on the 'record/player/platter'.

Its future existence is still TBD.

*/

import React from 'react';
import SpotifyPromisesClass from '../../../../../spotify';
const spotifyPromises = new SpotifyPromisesClass;

const NextSongBtn = props => {
  return (
    <button onClick={spotifyPromises.skipToNext}>skipFwd</button>
  )
}

export default NextSongBtn;
