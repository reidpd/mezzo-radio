/*

This component is responsible for housing dynamic search results for albums entered in 'components/interface/search_bar'.

 - It rerenders when an artist has been selected in 'panels/front' to display albums produced by selected artist.

*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {} from '../../../../redux/actions';

import AlbumList from '../../../lists/by/album/plural';

const mapStateToProps = (state) => {
  return {
    albums: state.albumsReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

class AlbumsPresentational extends Component {
  render() {
    return (
      <div className="artists-presentational">
        <AlbumList data={this.props.albums} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPresentational);
