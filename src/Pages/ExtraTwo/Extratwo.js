import React from 'react';
import './Extratwo.css';
const Extratwo = () => {
  return (
    <div>
      <h1 className='text-center mb-4'>
        <i class='fas fa-car' style={{ fontSize: '48px', color: 'red' }}></i>
        Demo Cars
      </h1>
      <div className='row kibria' style={{ width: '100%' }}>
        <div
          className='col col-lg-6 col-md-12'
          data-aos='fade-right'
          data-aos-duration='3000'>
          <img
            src='https://templates.scriptsbundle.com/carspot/demos/images/car.png'
            alt=''
            width='80%'
            id='golam'
          />
        </div>
        <div className='col col-lg-6 col-md-12'>
          <div className='row'>
            <div className='col  col-lg-12 col-md-12'>
              <div className='d-flex'>
                <div className=' mb-2'>
                  <img
                    src='https://templates.scriptsbundle.com/carspot/demos/images/blog/s1.jpg'
                    alt=''
                    width='150px'
                  />
                </div>
                <div className='ps-4 m-auto' style={{ width: '100%' }}>
                  <h6>2017 Honda City: Which Variant Suits You?</h6>
                </div>
              </div>
            </div>
            <div className='col  col-lg-12 col-md-12'>
              <div className='d-flex'>
                <div className=' mb-2'>
                  <img
                    src='https://templates.scriptsbundle.com/carspot/demos/images/blog/s3.jpg'
                    alt=''
                    width='150px'
                  />
                </div>
                <div className='ps-4 m-auto' style={{ width: '100%' }}>
                  <h6>
                    Audi A4 Diesel Launched In Bangladesh At Taka 40.20 Lakh
                  </h6>
                </div>
              </div>
            </div>
            <div className='col  col-lg-12 col-md-12'>
              <div className='d-flex'>
                <div className='mb-2 '>
                  <img
                    src='https://templates.scriptsbundle.com/carspot/demos/images/blog/s2.jpg'
                    alt=''
                    width='150px'
                  />
                </div>
                <div className='ps-4 m-auto' style={{ width: '100%' }}>
                  <h6>Honda City Facelift – Expected Prices</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extratwo;
