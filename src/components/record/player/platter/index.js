/*

This presentational component of the 'record/player' will house a 'record/disk' selected by the user for playing.

WHEN a 'record/covers/single' has been clicked
  AND no 'record/disk' is currently stationed above the 'record/player/platter',
    THEN a 'record/disk' will
      ^^move^^
        FROM the 'record/covers/single' in question
        TO the 'record/player/platter'

Similar tests will be written at a later date.

*/

import './main.css';
import React, { Component } from 'react';
import RecordDisk from '../../disk';

class Platter extends Component {
  // constructor(props) { super(props) }

  render() {
    return (
      <div className="record-platter">
        {/* <div className="center-num">.</div> */}
        <RecordDisk />
      </div>
    )
  }
}

export default Platter;
