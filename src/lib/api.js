import axios from 'axios';

const ALBUMS_URL = 'https://api.napster.com/v2.2/albums/top';
// const API_KEY = '?apikey=YTY2NzM4ODgtMTdhNi00MWQ5LTkyZDktMmZjODBkYzA4N2Qw';
const offset = Math.floor(Math.random() * 800);
const params = {
  params: {
    limit: 200,
    apikey: 'YTY2NzM4ODgtMTdhNi00MWQ5LTkyZDktMmZjODBkYzA4N2Qw',
    offset: offset
  }
};

// write a function to get the year the user submitted on the home page

// api for artists = 'https://api.napster.com/v2.2/artists/top'

export const registerUser = (newUserData) =>
  axios.post(`${BASE_URL}/register`, newUserData);

export const loginUser = (userData) =>
  axios.post(`${BASE_URL}/login`, userData);

export const getData = () => {
  return axios.get(ALBUMS_URL, params);
};
