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
import { albumHover, albumFocus, startAlbum } from '../../../../../redux/routines';
const routines = { albumHover, albumFocus, startAlbum };

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);

class Album extends Component {
  constructor(props) { super(props) }

  handleClick = (data) => this.props.albumFocus(data);
  handleDoubleClick = (context_uri) => this.props.startAlbum(context_uri);

  handleMouseHover = (input) => this.props.albumHover(input);

  render() {
    return (
      <div>
        <a
          onClick={ () => this.handleClick(this.props.data) }
          onDoubleClick={ () => this.handleDoubleClick(this.props.data.uri) }
          onMouseEnter={ () => this.handleMouseHover(this.props.data) }
          onMouseLeave={ () => this.handleMouseHover({ images: [{ url: '' }] }) }>
          Album: {this.props.data.name}
        </a>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
