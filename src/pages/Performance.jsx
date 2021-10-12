import React from 'react';

function Performance(props) {
  return (
    <main className="main performance performance-main">
      <video className="performance__video" autoPlay muted loop>
        <source
          src="https://files.porsche.com/filestore/video/multimedia/none/992-carrera-performance-intro-loop/video-mp4/94180f3e-80a3-11ea-80c9-005056bbdc38/porsche-video.mp4"
          type="video/mp4"
        />
      </video>
      <section className="performance__content">
        <div className="container">
          <h1 className="performance__title">Sports car performance.</h1>
          <ul className="performance__list">
            <li className="performance__list-item">
              <a className="performance__list-link" href="/">
                Powerful twin-turbo six-cylinder horizontally opposed engine in the rear
              </a>
            </li>
            <li className="performance__list-item">
              <a className="performance__list-link" href="/">
                High-precision Porsche Doppelkupplung transmission
              </a>
            </li>
            <li className="performance__list-item">
              <a className="performance__list-link" href="/">
                Systems for dynamics
              </a>
            </li>
          </ul>
          <button className="performance__btn">More information</button>
        </div>
      </section>
    </main>
  );
}

export default Performance;
