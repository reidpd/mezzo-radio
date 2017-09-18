/*

This component is responsible for housing dynamic search results for albums entered in 'components/interface/search_bar'.

 - It rerenders when an artist has been selected in 'panels/front' to display albums produced by selected artist.

*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import AlbumList from '../../../lists/by/album/plural';
import { bindRoutineCreators } from 'redux-saga-routines';
import { albumHover } from '../../../../redux/routines';
const routines = { albumHover };

const mapStateToProps = state => {  return { albums: state.albumsReducer }  };
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);

class AlbumsPresentational extends Component {

  handleMouseLeave = input => this.props.albumHover(input);

  render() {
    return (
      <div className="artists-presentational" onMouseLeave={() => { this.handleMouseLeave({ images: [{ url: '' }] }) }}>
        <AlbumList data={this.props.albums} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPresentational);
