import axios from 'axios';

const ALBUMS_URL = 'https://api.napster.com/v2.2/albums/top';
const API_KEY = {
  params: { apikey: 'YTY2NzM4ODgtMTdhNi00MWQ5LTkyZDktMmZjODBkYzA4N2Qw' }
};
const offset = Math.floor(Math.random() * 800);
const params = {
  params: {
    limit: 200,
    apikey: 'YTY2NzM4ODgtMTdhNi00MWQ5LTkyZDktMmZjODBkYzA4N2Qw',
    offset: offset
  }
};

export const registerUser = (newUserData) =>
  axios.post(`${BASE_URL}/register`, newUserData);

export const loginUser = (userData) =>
  axios.post(`${BASE_URL}/login`, userData);

export const getAlbums = () => {
  return axios.get(ALBUMS_URL, params);
};

export const getAlbum = (albumId) => {
  return axios.get(
    `https://api.napster.com/v2.2/albums/${albumId}/tracks`,
    API_KEY
  );
};

export const getTrack = (trackId) => {
  return axios.get(`https://api.napster.com/v2.2/tracks/${trackId}`, API_KEY);
};