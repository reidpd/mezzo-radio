/*

This is where artist lists will be built.

*/

import React, { Component } from 'react';
import Artist from '../single';

const ArtistList = (props) => {
  console.log(props)
  return (
    <div>
      { props.data.map(item => <Artist data={item} />) }
    </div>
  )
}

export default ArtistList;
