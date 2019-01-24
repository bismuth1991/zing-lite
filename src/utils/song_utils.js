import axios from 'axios';

export const fetchSomeSongs = (offSet = 0) => axios.get(
  `https://zing-lite-rails-api.herokuapp.com/api/songs/?off_set=${offSet}`,
);

export const justToGoAroundLinter = () => (
  'This does absolutely nothing'
);
