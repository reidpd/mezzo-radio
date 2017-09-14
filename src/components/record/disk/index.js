/*

This component is responsible for rendering an LP record.

It should be convincingly sized to
a) hide behind 'record/covers' and
b) fit onto the 'record/player/platter';

^^move^^() === CSS Transition/Transform?

When an 'album/single' is clicked on
  from EITHER:
    a) the 'record/covers/single' that is revealed above the 'crate/panels/top'
      *********OR************
    b) the 'record/stack',

{
  THEN a 'record/disk' of the 'album/single' in question will
    ^^move^^
      FROM behind the 'record/covers/single' in question
      TO above the 'record/player/platter',

  AND the 'record/disk' previously situated above the 'record/player/turntable' will
    ^^move^^
      FROM the 'record/player/platter'
      TO the 'record/cover/single' at the top of the 'record/stack'
}


*/
