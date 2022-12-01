import axios from 'axios';
import { useEffect, useState } from 'react';

const ALBUMS_URL = 'https://api.napster.com/v2.2/albums/top';
const API_KEY = '?apikey=YTY2NzM4ODgtMTdhNi00MWQ5LTkyZDktMmZjODBkYzA4N2Qw';
const API_LIMIT = '&limit=200';
const params = {
  params: {
    limit: 200,
    apikey: 'YTY2NzM4ODgtMTdhNi00MWQ5LTkyZDktMmZjODBkYzA4N2Qw'
  }
};
// api for artists = 'https://api.napster.com/v2.2/artists/top'

export const registerUser = (newUserData) =>
  axios.post(`${BASE_URL}/register`, newUserData);

export const loginUser = (userData) =>
  axios.post(`${BASE_URL}/login`, userData);

export const getData = () => {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    axios
      // .get(`${ALBUMS_URL + API_KEY + API_LIMIT}`)
      // .get(ALBUMS_URL, {
      //   params: {
      //     limit: 200,
      //     apikey: 'YTY2NzM4ODgtMTdhNi00MWQ5LTkyZDktMmZjODBkYzA4N2Qw'
      //   }
      // })
      .get(ALBUMS_URL, params)
      .then((res) => setAlbum(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (album === null) {
    return <p>Loading...</p>;
  }

  console.log(album);
};
