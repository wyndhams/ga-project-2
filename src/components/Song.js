import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbums, getAlbum, getTrack } from '../lib/api';

function Song() {
  const { birthyear } = useParams();

  // useEffect(() => {
  //   getAlbums()
  //     .then((res) => {
  //       console.log(res.data);
  //       const albumsFromBirthYear = res.data.albums.filter(
  //         (album) => album.originallyReleased.substring(0, 4) === birthyear
  //       );
  //       console.log(albumsFromBirthYear);
  //     })
  //     .catch((err) => console.error(err));
  // });

  // const [track, setTrack] = useState(null);

  // useEffect(() => {
  //   getAlbums()
  //     .then((res) => {
  //       const albumbsFromBirthYear = res.data.albums.filter(
  //         (album) => album.originallyReleased.substring(0, 4) === birthyear
  //       );

  //       const randomAlbumId =
  //         albumbsFromBirthYear[
  //           Math.ceil(Math.random() * albumbsFromBirthYear.length)
  //         ].id;

  //       console.log(albumbsFromBirthYear);

  //       getAlbum(randomAlbumId)
  //         .then((res) => {
  //           console.log(res.data);
  //           console.log(
  //             res.data.tracks[Math.ceil(Math.random() * res.data.tracks.length)]
  //           );

  //           const randomSongId =
  //             res.data.tracks[Math.ceil(Math.random() * res.data.tracks.length)]
  //               .id;

  //           console.log(randomSongId);

  //           getTrack(randomSongId)
  //             .then((res) => {
  //               setTrack(res.data);

  //               console.log(res.data);
  //             })
  //             .catch((err) => console.error(err));
  //         })
  //         .catch((err) => console.error(err));
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">whatever</h2>
        <hr />
        <div className="columns">
          <div className="column is-half">
            <figure className="image">
              <img
                src="https://m.media-amazon.com/images/I/61qGOWN5UeL._SY355_.jpg"
                alt="example"
              />
            </figure>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">
              <span role="img" aria-label="microphone">
                🎤
              </span>
              Artist
            </h4>
            <p>Example Artist name</p>
            <hr />
            <h4 className="title is-4">
              <span role="img" aria-label="cdwave">
                💿
              </span>
              Album/EP
            </h4>
            <p>Example</p>
            <hr />
            <h4 className="title is-4">
              <span role="img" aria-label="globe">
                🗓
              </span>
              Year published
            </h4>
            <hr />
            <p>Example year</p>
            <hr />
            <hr />
            <audio
              controls
              src="http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"
            ></audio>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Song;
