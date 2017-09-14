/*

This component is responsible for housing the progress bar that gives the user rewind/fast-forward functionality for the 'record/player/controls'.

NOTE: Introducing a progress bar instead of normal 'rewind/fast-forward' will be intentional, as the choice better reflects the usage of an actual record player.

The quantity of the slider at any given moment represents how far along the 'record/disk' on the 'record/player/platter'
has proceeded from its beginning (0% value, left-most side) to its end (100% value, right-most side).

WHEN a 'track/single' is playing, THEN the progress bar will slowly move from left to right.
WHEN a 'track/single' is paused, THEN the progress bar will remain motionless.

WHEN a new 'album/single' is clicked, THEN the progress bar value will revert to its default, left-most side position.

*/
