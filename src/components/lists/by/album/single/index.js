import React, { Component } from 'react';

const Album = (props) => {
  return (
    <div>
      <p>Album: {props.data.name}</p>
    </div>
  )
}

export default Album;
