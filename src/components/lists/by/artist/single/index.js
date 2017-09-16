import React, { Component } from 'react';

const Artist = (props) => {
  console.log(props.data)
  return (
    <div>
      <p>Name: {props.data.name}</p>
    </div>
  )
}

export default Artist;
