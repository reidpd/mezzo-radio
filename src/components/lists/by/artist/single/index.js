import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindRoutineCreators } from 'redux-saga-routines';
import { artistFocus } from '../../../../../redux/routines';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return bindRoutineCreators({ artistFocus }, dispatch);
}

class Artist extends Component {
  constructor(props) {
    super(props);
    this.artistId = this.props.data.id;
  }

  searchRelatedArtists = (id) => {
    this.props.searchRelatedArtists(id);
  }

  render() {
    return (
      <div>
        <a onClick={() => { this.artistFocus(this.artistId) }}>Name: {this.props.data.name}</a>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
