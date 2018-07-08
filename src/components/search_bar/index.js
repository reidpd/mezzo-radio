/*

This critical component is responsible for enabling users to search for desired music.

Ideally, it is a simple search bar form field whose string value, upon any edit, will

__dynamically__
---------------

1) trigger 'redux/actions' containing results from 'spotifyWebApi/get{thing}' calls,

which will

2) change the value of 'redux/reducers',

that are

3) changing the results of 'lists/by/{thing}'

that are

4) housed by 'crate/panels'.

*/

import React, { Component } from 'react';
import './main.css';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { search } from '../../redux/routines'; // importing our action

// const mapStateToProps = (state) => state;

// const actions = { search };
// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

class SearchBar extends Component {
  render() {
    return (
      <form className="search-bar-form" onSubmit={this.props.handleSubmit(search)}>
        <Field className="field" component="input" name="searchTerm" type="text" placeholder="Artist / Album" />
        <button className="submit-btn" type="submit">FIND</button>
      </form>
    );
  }
}

export default reduxForm()(SearchBar)
