import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

function Home() {
  const [startDate, setStartDate] = useState(new Date());

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
                onChange={(date) => setStartDate(date)}
                // onSelect={handleSelect} > will fire API with selected year
                showYearPicker
                dateFormat="yyyy"
              />
            </div>
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
