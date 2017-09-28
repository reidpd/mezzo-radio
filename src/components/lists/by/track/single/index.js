import React from 'react';

const Track = props => {
  console.log(props);
  if (!props.data) { return (<div></div>) }
  const data = props.data;
  const artists = [];
  data.artists.forEach(obj => artists.push(obj.name));
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
