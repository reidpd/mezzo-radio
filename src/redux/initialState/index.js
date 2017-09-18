/*

This file is responsible for hosting data which 'redux/reducers' consume as their initial state.

*/

export default {
  now_playing: null,
  albums: { items: [] },
  artists: [],
  artistFocus: null,
  albumFocus: { images: [{ url: "" }] },
  albumHover: { images: [{ url: "" }] },
  tokens: null,
  user: null,
};
