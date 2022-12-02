// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getSingleSong } from '../lib/api';

function Song() {
  // const { id } = useParams();
  // const [song, setSong] = useState(null);

  // useEffect(() => {
  //   getSingleSong(id)
  //     .then((res) => setSong(res.data))
  //     .catch((err) => console.error(err.response));
  // }, [id]);

  // if (song === null) {
  //   return (
  //     <p>
  //       Loading ...
  //     </p>
  //   );
  // }

  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">Example song title</h2>
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
