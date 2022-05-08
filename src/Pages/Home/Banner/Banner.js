import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='h-75' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://templates.scriptsbundle.com/carspot/demos/images/slider/slider-banner4.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Car Heaven</h3>
          <p>This a place for all beautiful cars.Hope you will like it.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://templates.scriptsbundle.com/carspot/demos/images/slider/slider-banner.jpg'
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3>Car Heaven</h3>
          <p>This a place for all beautiful cars.Hope you will like it.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://templates.scriptsbundle.com/carspot/demos/images/slider/slider-banner2.jpg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Car Heaven</h3>
          <p>This a place for all beautiful cars.Hope you will like it.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
