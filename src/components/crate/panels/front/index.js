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

import React, { Component } from 'react';
import { connect } from 'react-redux';
