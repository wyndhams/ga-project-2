import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAlbums, getAlbum, getTrack } from '../lib/api';
import { Navigate } from 'react-router-dom';

const Albums = () => {
  const { birthyear } = useParams();
  const [album, setAlbum] = useState(null);
  const [track, setTrack] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAlbums()
      .then((res) => {
        const albumsByYear = res.data.albums.filter(
          (album) => album.originallyReleased.substring(0, 4) === birthyear
        );

        console.log(albumsByYear);

        const randomAlbumId =
          albumsByYear[Math.floor(Math.random() * albumsByYear.length)].id;

        getAlbum(randomAlbumId)
          .then((res) => {
            setAlbum(res.data);
            console.log(res.data);
            const randomSongId =
              res.data.tracks[
                Math.floor(Math.random() * res.data.tracks.length)
              ].id;

            console.log(randomSongId);

            getTrack(randomSongId)
              .then((res) => setTrack(res.data))
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  // useEffect(() => {
  //   const randomSongId =
  //     album.tracks[Math.floor(Math.random() * album.tracks.length)].id;

  //   console.log(randomSongId);

  //   const trackObject = getTrack(randomSongId);
  //   console.log(trackObject);
  // }, []);

  if (album === null) {
    return <p>Loading</p>;
  }
  console.log('ksdflwndklnklnlwk', track);
  return <p>{track.tracks[0].artistName}</p>;
};

export default Albums;
