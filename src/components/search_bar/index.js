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

import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';

import { search } from '../../redux/actions'; // importing our action

export default class SearchBar extends Component {
  render() {
    const { handleSubmit } = this.props; // handleSubmit is provided by reduxForm
    const { submit } = handleSubmit(search); // creating our submit handler by passing our action
    // to handleSubmit as it stated in redux-form documentation
    // and bind our submit handler to onSubmit action:

    return (
      <form onSubmit={submit}>
        <Field component="input" name="artist" type="text" placeholder="Artist Search" />
        <button type="submit">FIND</button>
      </form>
    );
  }
}
