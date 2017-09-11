import React, { Component } from 'react';
const Spotify = require('spotify-web-api-node');
import { credentials } from '../../auth.js';
const spotifyApi = new Spotify(credentials);

export default class Interface extends Component {
  render() {
    return (
      <div className="interface_container">
        <p>MADE IT!</p>
      </div>
    )
  }
}
