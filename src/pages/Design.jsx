import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import carRed from '../assets/car2.jpg';
import carGreen from '../assets/car-green.jpg';
import carBlue from '../assets/car-blue.jpg';
import carAqua from '../assets/car-aqua.jpg';

function Design(props) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="main design design-main">
      <section className="design__content">
        <div className="container">
          <div className="slider">
            <div className="design__slider">
              <Slider {...settings}>
                <div className="design__slider-item">
                  <img className="design__slider-img" src={carRed} alt="car red" />
                </div>
                <div className="design__slider-item">
                  <img className="design__slider-img" src={carGreen} alt="car green" />
                </div>
                <div className="design__slider-item">
                  <img className="design__slider-img" src={carBlue} alt="car blue" />
                </div>
                <div className="design__slider-item">
                  <img className="design__slider-img" src={carAqua} alt="car aqua" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Design;
