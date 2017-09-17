/*

This component is responsible for housing cover art of albums selected/hovered in 'panels/left'.

  - When an artist is selected in 'panels/front', a number of tabs will appear above the top panel,
   the quantity depending on how many are listed by the left panel's inner list results.

  - When an album title is hovered over in 'panels/left', an appropriate tab will expand upwards to reveal an LP cover component.

  - When an album title is clicked, a 'record/disk' behind the 'record/cover' will slide rightwards onto the 'record/player/turntable'.

*/
import './main.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindRoutineCreators} from 'redux-saga-routines';
import RecordCover from '../../../record/covers/single';

const mapStateToProps = (state) => {
  return {
    albumFocus: state.albumFocusReducer,
    albumHover: state.albumHoverReducer, // for showing cover art hovered upon from list
  }
}

const mapDispatchToProps = dispatch => bindRoutineCreators({}, dispatch);

class RecordCoverPresentational extends Component {
  constructor(props) {
    super(props);
    const hoverImages = this.props.albumHover.images;
    const focusImages = this.props.albumFocus.images;
    this.img = !hoverImages ? focusImages[0].url : hoverImages[0].url;
  }
  render() {
    return (
      <div className="record-cover-presentational-container">
        <RecordCover imgSrc={((this.props.albumHover.images)[0].url) || ((this.props.albumFocus.images)[0].url)} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordCoverPresentational);
