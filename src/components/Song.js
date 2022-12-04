import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTrack } from '../lib/api';

function Song() {
  const { songId } = useParams();
  const [track, setTrack] = useState(null);

  useEffect(() => {
    getTrack(songId)
      .then((res) => setTrack(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (track === null) {
    return <p>Loading</p>;
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">{track.tracks[0].name}</h2>
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
            <p>{track.tracks[0].artistName}</p>
            <hr />
            <h4 className="title is-4">
              <span role="img" aria-label="cdwave">
                💿
              </span>
              Album/EP
            </h4>
            <p>{track.tracks[0].albumName}</p>
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
              src="https://www.kozco.com/tech/piano2-CoolEdit.mp3"
            ></audio>
            <audio controls src={track.tracks[0].previewURL}></audio>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Song;
