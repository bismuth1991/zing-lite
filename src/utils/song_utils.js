import axios from 'axios';

export const fetchSomeSongs = (offSet = 0) => (
  axios.get(
    '/api/songs',
    { off_set: offSet },
  )
);

export const justToGoAroundLinter = () => (
  'This does absolutely nothing'
);
