import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTokens, setUserInfo } from '../../actions';

const actions = { setTokens, setUserInfo };

const spotify = require('../../config/spotifyWebApi.js');

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    tokens: state.tokensReducer,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

class Interface extends Component {
  componentDidMount = () => {
    if (this.props.user === null) {
      const params = {};
      const uri = window.location.href;
      const paramsIdx = uri.indexOf('?') + 1;
      const lengthyStr = uri.substring(paramsIdx);
      const obj = JSON.parse(decodeURIComponent(lengthyStr));
      console.log(obj);

      // Set the access token on the API object to use it in later calls
      spotify.setAccessToken(obj.access_token);
      spotify.setRefreshToken(obj.refresh_token);
      this.props.setTokens(obj);

      // use the access token to access the Spotify Web API
      spotify.getMe().then(({ body }) => this.props.setUserInfo(body) );
    }

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
export default connect(mapStateToProps, mapDispatchToProps)(Interface);
