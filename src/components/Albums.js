import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbums, getAlbum, getTrack } from '../lib/api';

const Albums = () => {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    getAlbums()
      .then((res) => {
        const filteredByYear = res.data.albums.filter(
          (album) => album.originallyReleased.substring(0, 4) === birthyear
        );
        const randomAlbumId =
          filteredByYear[Math.ceil(Math.random() * filteredByYear.length)].id;
        const albumObject = getAlbum(randomAlbumId);
        console
          .log(albumObject)
          .then((album) => {
            const randomSongId =
              album.tracks[Math.ceil(Math.random() * album.tracks.length)].id;
            const trackObject = getTrack(randomSongId);
            console.log(trackObject);
          })
          .catch((err) => console.error(err));
        console.log(albums);
      })
      .catch((err) => console.error(err));
  }, []);
  return <p>Albums</p>;
};

export default Albums;
