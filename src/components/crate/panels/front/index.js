/*

This component is responsible for housing dynamic search results for artists entered in 'components/interface/search_bar'.

The component is stateful & reacts to changes of the following pieces of state:
a) what artists are being searched for in the search bar
b) what artist whose albums are being looked at (to rerender with related artists)

 - WHEN a 'lists/by/artist/single' from the 'list/by/artist/plural' is selected, THEN 'lists/by/artist/plural' rerenders to show related artists.
     ** Use redux to store related artists, create new list with that info

*/

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {} from '../../../../redux/actions';

import ArtistList from '../../../lists/by/artist/plural';
import Artist from '../../../lists/by/artist/single';

const mapStateToProps = (state) => {
  return {
    artists: state.artistsReducer,
    artistFocus: state.artistFocusReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({},dispatch);
}

class ArtistsPresentational extends Component {
    determineArtists = (artists) => {
      return (artists[0] === this.props.artistFocus) ? artists.slice(1) : artists;
    }

    render() {
        if (this.props.artistFocus === null) {
          return (
              <div className="artists-presentational-container">
                <ArtistList data={this.props.artists} />
              </div>
          );
        } else {
          const artists = this.determineArtists(this.props.artists);
          return (
              <div className="artists-presentational-container">
                <Artist data={this.props.artistFocus} />
                <ArtistList data={artists} />
              </div>
          )
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(ArtistsPresentational);
