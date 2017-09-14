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
