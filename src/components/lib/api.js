import axios from 'axios';
import { useEffect, useState } from 'react';

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

// const handleSubmit = async (e) => {
//   e.preventDefault(); 
//   return const selectedYear = e.target.value;
// };

const selectedYear = 2000;

// api for artists = 'https://api.napster.com/v2.2/artists/top'

export const registerUser = (newUserData) =>
  axios.post(`${BASE_URL}/register`, newUserData);

export const loginUser = (userData) =>
  axios.post(`${BASE_URL}/login`, userData);

export const getData = () => {
  const [albums, setAlbums] = useState(null);

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
      .then((res) => setAlbums(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (albums === null) {
    return <p>Loading...</p>;
  }

  const albumsArray = albums.albums;

  console.log(albumsArray);

  const albumsArrayFilteredByYear = albumsArray.filter((album) => {
    console.log(album);
    return album.originallyReleased.substring(0, 4) === selectedYear;
  });

  // const objectAlbums = Object.keys(albums.originallyReleased);

  // console.log(objectAlbums);

  // const selectedYearAlbums = albumsObject.filter((album) => {
  //   const releasedYear = album.originallyReleased;
  // console.log(Array.from(releasedYear));
  // const selectedAlbums = releasedYear.contains(selectedYear);
  // console.log(selectedAlbums);
  // });

  // console.log(selectedYearAlbums);

  const randomAlbum =
    albumsArrayFilteredByYear[
      Math.floor(Math.random() * albumsArrayFilteredByYear.length)
    ];

  console.log(randomAlbum);
};
