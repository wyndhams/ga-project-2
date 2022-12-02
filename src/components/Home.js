import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const date = new Date();
  const [startDate, setStartDate] = useState(date);
  const navigate = useNavigate();

  const handleChange = (date) => {
    setStartDate(date);
  };

  const handleSelect = () => {
    navigate(`/song/${startDate.getFullYear()}`);
  };

  return (
    <>
      <section className="hero is-medium is-link">
        <div className="hero-body">
          <p className="title">Your birth year in songs</p>
          <p className="subtitle">Discover music from your year of birth</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h1 className="title">Pick your birthyear</h1>
              <DatePicker
                selected={startDate}
                onChange={handleChange}
                showYearPicker
                dateFormat="yyyy"
              />
            </div>
            <button onClick={handleSelect}>Get My Random Song</button>
            <div className="column is-half">
              <div className="columns">
                <div className="column">
                  <p>This is random artist preview 1</p>
                  <p>This is random artist preview 2</p>
                </div>
                <div className="column">
                  <p>This is random artist preview 3</p>
                  <p>This is random artist preview 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
