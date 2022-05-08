import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {

  const {
    _id,
    name,
    price,
    description,
    image,
    quantity,
    supplier_name,
    sold,
  } = inventory;
  const navigate = useNavigate();
  const handleInventory = () => {
    navigate(`/inventory/${_id}`);
  };
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>Price: {price}</Card.Text>
          <Card.Text>Description: {description}</Card.Text>
          <Card.Text>Quantity: {quantity}</Card.Text>
          <Card.Text>Supplier_name: {supplier_name}</Card.Text>
          <Card.Text>Sold: {sold}</Card.Text>
        </Card.Body>

        <Card.Body className='d-felx justify-content-center'>
          <Button onClick={handleInventory} variant='dark'>
            Update Inventory
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Inventory;
