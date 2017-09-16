import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindRoutineCreators } from 'redux-saga-routines';
// import { bindActionCreators } from 'redux';
import { artistFocus } from '../../../../../redux/routines';
// import { setFocusArtist } from '../../../../../redux/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  // return {
  //   actions: bindActionCreators({ setFocusArtist }, dispatch),
  //   routines: bindRoutineCreators({ artistFocus }, dispatch),
  // };
  return bindRoutineCreators({ artistFocus }, dispatch);
}

class Artist extends Component {
  constructor(props) {
    super(props);
    this.artistId = this.props.data.id;
    this.data = this.props.data || null;
  }

  handleClick = (artistId, data) => {
    this.props.artistFocus({ artistId, data });
  }

  render() {
    return (
      <div>
        <a onClick={() => { this.handleClick(this.artistId, this.props.data) }}>
          Name: {this.props.data.name}
        </a>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
