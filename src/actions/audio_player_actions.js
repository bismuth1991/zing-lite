export const FORWARD = 'FORWARD';
export const BACKWARD = 'BACKWARD';
export const SHUFFLE = 'SHUFFLE';
export const USER_CLICK_PLAY = 'USER_CLICK_PLAY';
export const CHANGE_SONG = 'CHANGE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

export const forward = () => ({
  type: FORWARD,
});

export const backward = () => ({
  type: BACKWARD,
});

export const shuffle = () => ({
  type: SHUFFLE,
});

export const userClickPlay = songId => ({
  type: USER_CLICK_PLAY,
  songId,
});

export const changeSong = songId => ({
  type: CHANGE_SONG,
  songId,
});

export const removeSong = songId => ({
  type: REMOVE_SONG,
  songId,
});
