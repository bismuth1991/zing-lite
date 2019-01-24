export const FORWARD = 'FORWARD';
export const BACKWARD = 'BACKWARD';
export const SHUFFLE = 'SHUFFLE';
export const USER_CLICK_PLAY = 'USER_CLICK_PLAY';

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
