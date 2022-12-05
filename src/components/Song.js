import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTrack } from '../lib/api';
import Home from './Home';
// import Albums from './Albums';

function Song({ image }) {
  const { songId } = useParams();
  const [track, setTrack] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getTrack(songId)
      .then((res) => setTrack(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (track === null) {
    return <p>Loading</p>;
  }

  const rerender = () => {
    navigate(`/albums/${startDate.getFullYear()}`);
  };

  return (
    <>
      {/* Q? Not sure why below isn't centered on page, I thought className "container" makes it centered */}
      <div className="container">
        <div className="column is-half-desktop is-one-half-tablet">
          <div className="card">
            <div className="card-header">
              <h4 className="card-header-title">{track.tracks[0].name}</h4>
            </div>
            <div className="card-image">
              <figure className="image image is-1by1">
                {/* <Albums /> */}
                <img
                  src={image}
                  alt="example"
                  loading="lazy"
                  width="255"
                  height="255"
                />
              </figure>
            </div>
            <div className="card-content">
              <h4 className="">
                <strong>Artist:</strong> {track.tracks[0].artistName}
              </h4>
              <h4 className="">
                <strong>Album/EP:</strong> {track.tracks[0].albumName}
              </h4>
              <h4 className="">
                <strong>Released:</strong> {track.tracks[0].albumName}
              </h4>
              <audio controls src={track.tracks[0].previewURL}></audio>
              <button onClick={rerender} className="render">
                New Track
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Song;
