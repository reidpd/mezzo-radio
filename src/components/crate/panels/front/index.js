/*

This component is responsible for housing dynamic search results for artists entered in 'components/interface/search_bar'.

The component is stateful & reacts to changes of the following pieces of state:
a) what artists are being searched for in the search bar
b) what artist whose albums are being looked at (to rerender with related artists)

Therefore, it needs to dispatch these types of actions:
a) ARTIST_PERUSED

 - WHEN a 'lists/by/artist/single' from the 'list/by/artist/plural' is selected, THEN 'lists/by/artist/plural' rerenders to show related artists.
     ** Use redux to store related artists, create new list with that info

*/

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {} from '../../../../redux/actions';

const mapStateToProps = (state) => {
  return {
    artists: state.artistReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({},dispatch);
}

class ArtistsPresentational extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="class-name">
                <p>Artists will go here!</p>
            </div>
        );
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(ArtistsPresentational);
