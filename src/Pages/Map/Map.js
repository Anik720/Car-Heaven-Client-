import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import './Map.css';
import { Form } from 'react-bootstrap';
mapboxgl.accessToken =
  'pk.eyJ1IjoiYW5pazQyMCIsImEiOiJja2VrYnZuYmYwMjJiMnJxeDdxdDFybGV0In0.LAZlnQy4hbtQaNbaoT0z5g';

class Mapp extends React.Component {
  // Set up states for updating map
  constructor(props) {
    super(props);
    this.state = {
      lng: 88.61533607161022,
      lat: 25.644673267526876,
      zoom: 10,
    };
  }

  componentDidMount() {
    // Set up map
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/anik420/ckelf91ng0xlg19qqm3zqhkdc',
      center: [88.61533607161022, 25.644673267526876],
      zoom: 10,
    });
  }

  render() {
    return (
      <div className='map-container container'>
        <div>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='name@example.com' />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Your Message</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>
          </Form>
        </div>
        <div
          ref={(el) => (this.mapContainer = el)}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    );
  }
}

export default Mapp;
