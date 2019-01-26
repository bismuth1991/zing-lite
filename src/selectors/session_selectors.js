export const isLoggedIn = ({ session }) => (
  Boolean(session.user.userId)
);

export const isLoggedOut = ({ session }) => (
  !session.user.userId
);
