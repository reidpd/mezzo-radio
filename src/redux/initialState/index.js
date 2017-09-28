/*

This file is responsible for hosting data which 'redux/reducers' consume as their initial state.

*/

export default {
  now_playing: {
    body: {
      item: {
        duration_ms: 5000,
      },
      progress_ms: 0,
    },
  },
  albums: { items: [] },
  artists: [],
  artistFocus: null,
  albumFocus: { images: [{ url: "" }] },
  albumHover: { images: [{ url: "" }] },
  trackNowPlaying: null,
  trackCount: 0,
  albumTracksNowPlaying: {
    body: {
      items: [
        {
          name: null,
        }
      ]
    }
  },
  tokens: null,
  progressBar: {
    state: {
      max: 100,
      value: 0,
    },
  },
  time: {
    startedAt: undefined,
    stoppedAt: undefined,
    baseTime: undefined
  },
  user: null,
};
