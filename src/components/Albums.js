import { useState, useEffect } from 'react';
import { getData } from '../lib/api';

const Albums = () => {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    getData()
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(albums);
  return <p>Albums</p>;
};

export default Albums;
