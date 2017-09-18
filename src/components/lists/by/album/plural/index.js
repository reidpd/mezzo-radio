/*

This is where album lists will be constructed of 'albums/single' components.

*/

import React, { Component } from 'react';
import Album from '../single';

const AlbumList = (props) => {
  console.log(props);
  return (
    <div>
      { props.data.items.map(item => <Album data={item} />) }
    </div>
  )
}

export default AlbumList;
