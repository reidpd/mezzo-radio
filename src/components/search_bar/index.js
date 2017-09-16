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
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { reduxForm, Field } from 'redux-form';

import { search } from '../../redux/actions'; // importing our action

const mapStateToProps = (state) => state;

const actions = { search };
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => this.setState({ searchTerm: event.target.value });
  handleSubmit = (event) => { event.preventDefault(); this.props.search(this.state.searchTerm); }

  render() {
    // const { handleSubmit } = this.props; // handleSubmit is provided by reduxForm
    // const { submit } = this.props.search(); // creating our submit handler by passing our action
    // to handleSubmit as it stated in redux-form documentation
    // and bind our submit handler to onSubmit action:
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search the crate for your favorite artists or albums!
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        </label>
        <button type="submit">FIND</button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
