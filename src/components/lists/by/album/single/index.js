/*

This is where the model component lives for individual Albums.
Collections of these create AlbumLists.

*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { setHoverAlbum, setFocusAlbum } from '../../../../../redux/actions';
// const actions = { setHoverAlbum, setFocusAlbum };
import { bindRoutineCreators } from 'redux-saga-routines';
import { albumHover, albumFocus } from '../../../../../redux/routines';
const routines = { albumHover, albumFocus };

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);

class Album extends Component {
  constructor(props) { super(props) }

  handleClick = (data) => {
    if (data) { this.props.albumFocus(data) }
  }

  handleMouseOver = (data) => {
    if (data) { this.props.albumHover(data) }
  }

  render() {
    return (
      <div>
        <a
          onClick={ () => this.handleClick(this.props.data) }
          onMouseOver={ () => this.handleMouseOver(this.props.data) }>
          Album: {this.props.data.name}
        </a>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
