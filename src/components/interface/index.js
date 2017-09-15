/*

This is the central interface container for the app, where primary components for app usage are organized.

The Mezzo-Radio experience contains the following big components:
  - A 'search_bar' for users to find artists/albums/genres they like
  - A 'crate' to house records / search results
  - A 'record/stack' to organize a queue of upcoming selections
  - A 'record/player' to play desired music

  - *** Future feature: 'crate-queue', collection of past crates for instant replay ***

*/

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchBar from '../search_bar';
import Crate from '../crate';
// import RecordStack from "../record/stack";
// import RecordPlayer from '../record/player';
import { setTokens, setUserInfo } from '../../redux/actions';
const actions = { setTokens, setUserInfo };

const spotify = require('../../config/spotifyWebApi.js');

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    tokens: state.tokensReducer,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

class Interface extends Component {
  componentDidMount = () => {
    if (this.props.user === null) {
      const uri = window.location.href;
      const paramsIdx = uri.indexOf('?') + 1;
      const lengthyStr = uri.substring(paramsIdx);
      const obj = JSON.parse(decodeURIComponent(lengthyStr));

      // Set the access token on the API object to use it in later calls
      spotify.setAccessToken(obj.access_token);
      spotify.setRefreshToken(obj.refresh_token);
      this.props.setTokens(obj);

      // use the access token to access the Spotify Web API
      spotify.getMe().then(({ body }) => this.props.setUserInfo(body) );


    }

  }

  search = () => {
    spotify.search('alt', ['album', 'artist', 'track'])
      .then(data => {
        console.log('results for spotify.search(alt): ', data)
      }, err => { console.log('Something went wrong! Your error message is: ', err) });
  }

  searchArtists = () => {
    spotify.searchArtists('fleet')
      .then(data => {
        console.log('results for spotify.searchArtists(fleet): ', data)
      }, err => { console.log('Something went wrong! Your error message is: ', err) })
  }

  searchAlbums = () => {
    spotify.searchAlbums('brown')
      .then(data => {
        console.log('results for spotify.searchAlbums(brown): ', data)
      }, err => { console.log('Something went wrong! Your error message is: ', err) });
  }

  getArtistRelatedArtists = () => {
    spotify.getArtistRelatedArtists('4EVpmkEwrLYEg6jIsiPMIb')
      .then(data => {
        console.log('results for spotify.getArtistRelatedArtists(${alt-J id}): ', data.body);
      }, err => { console.log('Something went wrong! Your error message is: ', err) });
  }

  render() {
    return (
      <div className="interface_container">
        <h1>Mezzo-Radio Header</h1>
        {/* <RecordStack /> */}
        {/* <Crate /> */}
        {/* <SearchBar /> */}
        {/* <RecordPlayer /> */}
        <button onClick={this.search}>Search</button>
        <button onClick={this.searchArtists}>searchArtists</button>
        <button onClick={this.searchAlbums}>searchAlbums</button>
        <button onClick={this.getArtistRelatedArtists}>getArtistRelatedArtists</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interface);
