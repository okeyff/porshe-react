import React from 'react';

function Home(props) {
  return (
    <main className="main">
      <section className="content">
        <div className="container">
          <div className="content__inner">
            <p className="content__subtitle">From $135,200.00</p>
            <h1 className="content__title">911 Targa 4S</h1>
            <div className="content__info">
              <div className="content__info-item">
                <p className="content__info-title">443hp</p>
                <p className="content__info-text">Max Power</p>
              </div>
              <div className="content__info-item">
                <p className="content__info-title">3.6s</p>
                <p className="content__info-text">0 - 60 mph</p>
              </div>
              <div className="content__info-item">
                <p className="content__info-title">188mph</p>
                <p className="content__info-text">Top Speed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
