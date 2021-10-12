import React from 'react';

import CarModel from '../components/CarModel';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function Models({ items }) {
  return (
    <main className="main models models-main">
      <section className="models__content">
        <div className="models__slider">
          <div className="models-slider">
            <Carousel
              plugins={[
                'arrows',
                'infinite',
                'centered',
                'fastSwipe',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ]}
              breakpoints={{
                1024: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                  ],
                },
              }}>
              {items.map((obj) => (
                <CarModel key={obj.id} {...obj} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Models;
