/*

This is where the model component for a single LP cover / piece-of-cover-art lives.

*/

import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindRoutineCreators } from 'redux-saga-routines';
// import {} from '../../../../redux/routines';
// const routines = {};
//
// const mapStateToProps = state => {
//   return {
//     albumFocus: state.albumFocusReducer,
//     albumHover: state.albumHoverReducer,
//   }
// }
//
// const mapDispatchToProps = dispatch => bindRoutineCreators(routines, dispatch);
//
// class RecordCover extends Component {
//   constructor(props) {
//     super(props);
//     this.img = this.props
//   }
//
//   render() {
//     return (
//       <div>
//         <img src={this.img} alt="This is a colorful record cover!"/>
//       </div>
//     )
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(RecordCover);

const RecordCover = (props) => {
  return (
    <div>
      <img src={props.imgSrc} alt="a pretty picture" />
    </div>
  )
}

export default RecordCover;
