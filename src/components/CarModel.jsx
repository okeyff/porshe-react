import React from 'react';

function CarModel({ name, price, imageUrl, power, seconds, maxSpeed }) {
  return (
    <div className="models-slider__item">
      <div className="models-slider__top">
        <p className="models-slider__top-title">
          {name}
          <span>From ${price}</span>
        </p>
        <img className="models-slider__top-img" src={imageUrl} alt="car" />
      </div>
      <div className="models-slider__techdata">
        <div className="models-slider__techdata-item">
          <span className="models-slider__techdata-value">{power} hp</span>
          <span className="models-slider__techdata-key">Max.power</span>
        </div>
        <div className="models-slider__techdata-item">
          <span className="models-slider__techdata-value">{seconds}s</span>
          <span className="models-slider__techdata-key">0 - 60mph</span>
        </div>
        <div className="models-slider__techdata-item">
          <span className="models-slider__techdata-value">{maxSpeed} mph</span>
          <span className="models-slider__techdata-key">Top Track Speed</span>
        </div>
      </div>
      <div className="models-slider__buttons">
        <button className="models-slider__buttons-btn">Technical Specs</button>
        <button className="models-slider__buttons-btn">Build Your Porshe</button>
        <button className="models-slider__buttons-btn">Compare</button>
      </div>
    </div>
  );
}

export default CarModel;
