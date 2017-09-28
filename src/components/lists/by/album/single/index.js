/*

This is where the model component lives for individual Albums.
Collections of these create AlbumLists.

*/

import React, { Component } from 'react';
import './main.css';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { setHoverAlbum, setFocusAlbum } from '../../../../../redux/actions';
// const actions = { setHoverAlbum, setFocusAlbum };
import { bindRoutineCreators } from 'redux-saga-routines';
import { albumHover, albumFocus, startAlbum, startTimerAsync, resetTimerAsync } from '../../../../../redux/routines';
const routines = { albumHover, albumFocus, startAlbum, startTimerAsync, resetTimerAsync };

const mapStateToProps = state => {
  return {
    time: state.timeReducer.currentTimeReducer
  }
};
const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);

class Album extends Component {
  // constructor(props) { super(props) }

  handleClick = (data) => this.props.albumFocus(data);
  handleDoubleClick = (data) => {
    const context_uri = data.uri;
    const albumID = data.id;
    const { baseTime, startedAt, stoppedAt } = this.props.time;
    const elapsed = this.getElapsedTime(baseTime, startedAt, stoppedAt);
    this.props.startAlbum({ context_uri, albumID, elapsed });
  };

  handleMouseHover = (input) => this.props.albumHover(input);

  getElapsedTime = (baseTime, startedAt, stoppedAt = new Date().getTime()) => {
    if (!startedAt) { return 0; }
    return stoppedAt - startedAt + baseTime;
  }

  render() {
    return (
      <div>
        <a
          className="single-album-anchor"
          onClick={ () => this.handleClick(this.props.data) }
          onDoubleClick={ () => this.handleDoubleClick(this.props.data) }
          onMouseEnter={ () => this.handleMouseHover(this.props.data) }
          /* onMouseLeave={ () => this.handleMouseHover({ images: [{ url: '' }] }) } */ >
          Album: {this.props.data.name}
        </a>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
