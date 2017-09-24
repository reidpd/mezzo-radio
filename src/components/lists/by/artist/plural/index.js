/*

This is where artist lists will be built.

*/

import React from 'react';
import Artist from '../single';

const ArtistList = (props) => {
  return (
    <div>
      { props.data.map(item => <Artist data={item} />) }
    </div>
  )
}

export default ArtistList;
