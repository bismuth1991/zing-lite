import axios from 'axios';

export const nothing = () => (
  'this does absolutely nothing'
);

export const fetchDataByQuery = query => (
  axios.request({
    url: `https://zing-lite-rails-api.herokuapp.com/api/searches/?query=${query}`,
    method: 'get',
  })
);
