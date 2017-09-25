import React from 'react';

const Track = props => {
  const data = props.data.body.item;
  if (!data.album) { return ( <div></div> ) }
  const artists = [];
  data.album.artists.forEach(obj => artists.push(obj.name));
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
