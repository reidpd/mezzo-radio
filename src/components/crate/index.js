/*

This is the main crate component.

It is comprised of several 'panels' that are responsible for housing search results
entered in the 'interface/search_bar'.

 - The front panel will house search results by artist,
 - The left panel will house search results by album,
 - The top panel will be responsible for housing tabs that pop up into LP covers

*/

import React from 'react';
import './main.css';
import ArtistsPresentational from './panels/front';
import AlbumsPresentational from './panels/left';
import RecordCoverPresentational from './panels/top';
import SearchBar from '../search_bar';


const Crate = () => (
  <div className="crate-container">
    <div className="crate-panels-container">
      <div className="crate-panels-top-half">
        <div className="crate-panel-top-container">
          <div className="top-panel-content">
            <RecordCoverPresentational />
          </div>
        </div>
      </div>
      <div className="crate-panels-bottom-half">
        <div className="crate-panel-left-container">
          <AlbumsPresentational />
        </div>
        <div className="crate-panel-front-container">
          <ArtistsPresentational />
        </div>
      </div>
    </div>
    <SearchBar form='simple'/>
  </div>
);


export default Crate;
