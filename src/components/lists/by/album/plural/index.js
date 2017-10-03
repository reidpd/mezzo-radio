/*

This is where album lists will be constructed of 'albums/single' components.

*/

import React from 'react';
import Album from '../single';

const AlbumList = (props) => {
  this.singleAlbum = (data) => <Album data={data} />;

  return (
    <div>
      { props.data.items.map(item => this.singleAlbum(item)) }
    </div>
  )
}

export default AlbumList;
