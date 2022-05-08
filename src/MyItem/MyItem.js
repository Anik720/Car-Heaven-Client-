import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../firebaseinit';
import Inventory from '../Pages/Home/Inventory/Inventory';
import './MyItem.css';
const MyItem = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const { uid, email } = user;

  const [items, setItems] = useState([]);
  console.log(items);

  useEffect(() => {
    const getOrders = async () => {
      const url = `https://phinventory.herokuapp.com/myItem?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate('/login');
        }
      }
    };
    getOrders();
  }, [user]);
  const handlerDelete = (id) => {
    const confirm = window.confirm(
      'Are you Sure that you want to delete this item?',
    );
    if (!confirm) {
      return;
    }
    fetch(`https://phinventory.herokuapp.com/inventory/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          console.log(data);
          const data1 = items.filter((item) => item._id !== id);

          setItems(data1);
        },
        // this is the data we get after doing the delete request, do whatever you want with this data
      );
    toast('Item deleted');
  };
  return (
    <>
      <h1 className='text-center'>My Items</h1>
      <div className='conatiner my-item m-auto'>
        {items.map((item) => (
          <Card style={{ width: '70%' }} id='card'>
            <Card.Img variant='top' src={item.image} />
            <Card.Body>
              <Card.Title>Name: {item.name}</Card.Title>
              <Card.Text>Price: {item.price}</Card.Text>
              <Card.Text>Description: {item.description}</Card.Text>
              <Card.Text>Quantity: {item.quantity}</Card.Text>
              <Card.Text>Supplier_name: {item.supplier_name}</Card.Text>
              <Card.Text>Sold: {item.sold}</Card.Text>
            </Card.Body>

            <Card.Body className='d-felx justify-content-center'>
              <Button onClick={() => handlerDelete(item._id)} variant='dark'>
                Delete Item
              </Button>
            </Card.Body>
          </Card>
        ))}
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default MyItem;
