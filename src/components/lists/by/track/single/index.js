/*

This file houses the stateless component for rendering tracks.

For now, it is only being used in the record/player/controls for the trackDisplay.

Future uses could include listing Tracks behind the album art component(s).

*/

import React from 'react';

const Track = props => {
  if (!props.data) { return (<div></div>) }
  const data = props.data;
  const artists = [];
  if (data.artists) {
    data.artists.forEach(obj => artists.push(obj.name));
  }
  return (
    <div>
      <ul>
        <li>{data.name}</li>
        <li>{artists.join(', ')}</li>
      </ul>
    </div>
  )
}

export default Track;
