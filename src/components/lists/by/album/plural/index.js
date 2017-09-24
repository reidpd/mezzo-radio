/*

This is where album lists will be constructed of 'albums/single' components.

*/

import React from 'react';
import Album from '../single';

const AlbumList = (props) => {
  return (
    <div>
      { props.data.items.map(item => <Album data={item} />) }
    </div>
  )
}

export default AlbumList;
