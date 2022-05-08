import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useInventories from '../../../Hooks/useInventories';
import Extraone from '../../Extraone/Extraone';
import Extratwo from '../../ExtraTwo/Extratwo';
import Mapp from '../../Map/Map';

import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Inventory from '../Inventory/Inventory';
import './Home.css';
const Home = () => {
  const [inventories, setInventories] = useInventories();
  const navigate = useNavigate();
  const size = 6;
  const items = inventories.slice(0, size);
  console.log(items);
  const handleInventory = (_id) => {
    navigate(`/inventory/${_id}`);
  };
  return (
    <div>
      <Banner></Banner>
      <h1 className='text-center my-5 '>
        {' '}
        <i
          className='fas fa-car-side'
          style={{ fontSize: '48px', color: 'red' }}></i>
        Inventory Items
      </h1>
      <div className='inventory-container'>
        {items.map((item) => (
          <Card
            className='harun'
            style={{ width: '70%' }}
            data-aos='flip-left'
            data-aos-duration='3000'>
            <Card.Img variant='top' src={item.image} />
            <Card.Body>
              <Card.Title>Name: {item.name}</Card.Title>
              <Card.Text>Price: {item.price}</Card.Text>
              <Card.Text>Description: {item.description}</Card.Text>
              <Card.Text>Quantity: {item.quantity}</Card.Text>
              <Card.Text>Supplier_name: {item.supplier_name}</Card.Text>
              <Card.Text>Sold: {item.sold}</Card.Text>
            </Card.Body>

            <Card.Body>
              <div className='d-felx justify-content-center'>
                <Button
                  onClick={() => handleInventory(item._id)}
                  variant='dark'>
                  Update Inventory
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className='d-flex justify-content-center mt-4'>
        <Link to='/manage'>
          <button className='btn btn-dark'>
            <i
              class='fa fa-cogs'
              style={{ fontSize: '30px', color: 'red' }}></i>
            Manage Inventories
          </button>
        </Link>
      </div>
      <div>
        <Extraone></Extraone>
      </div>
      <div>
        <Extratwo></Extratwo>
      </div>
      <div className='mb-5'>
        <h1 className='text-center'>Our Location</h1>
        <Mapp></Mapp>
      </div>
    </div>
  );
};

export default Home;
