import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { credentials } from '../../config/auth.js';
import {} from '../../actions';

const Spotify = require('spotify-web-api-node');
const spotifyApi = new Spotify(credentials);

const mapStateToProps = (state) => {}

const mapDispatchToProps = (dispatch) => {}

class Interface extends Component {
  componentDidMount = () => {
    let obj;

  }

  render() {
    return (
      <div className="interface_container">
        <p>MADE IT!</p>
      </div>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Interface);
export default Interface;
