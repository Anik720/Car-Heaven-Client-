import { async } from '@firebase/util';
import axios from 'axios';
import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../firebaseinit';

const AddItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(user);
  const handleraddIemSubmit = async (e) => {
    e.preventDefault();
    const email = user.email;
    const name = e.target.name.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const supplier_name = e.target.supplier_name.value;
    const sold = e.target.sold.value;
    console.log(price);
    if (price < 0 && quantity < 0) {
      return toast('Enter  Positive numbers');
    }
    const item = {
      email,
      name,
      image,
      description,
      price,
      quantity,
      supplier_name,
      sold,
    };

    const confirm = window.confirm(
      'Are you Sure that you want to add this item?',
    );
    if (!confirm) {
      return;
    }
    await axios
      .post('https://phinventory.herokuapp.com/inventory', {
        item,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    toast('Item added');
    navigate('/myitem');
  };

  return (
    <div>
      <h1 className='text-center'>Add Item</h1>
      <form className='w-50 m-auto' onSubmit={handleraddIemSubmit}>
        <>
          <FloatingLabel
            controlId='floatingInput'
            label='Inventory Item Name'
            className='mb-3'>
            <Form.Control type='text' placeholder='Name' name='name' />
          </FloatingLabel>
          <FloatingLabel controlId='Image' label='Image' className='mb-3'>
            <Form.Control type='text' placeholder='Image' name='image' />
          </FloatingLabel>
          <FloatingLabel
            controlId='description'
            label='Description'
            className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Description'
              name='description'
            />
          </FloatingLabel>
          <FloatingLabel controlId='price' label='price' className='mb-3'>
            <Form.Control type='number' placeholder='price' name='price' />
          </FloatingLabel>
          <FloatingLabel controlId='quantity' label='quantity' className='mb-3'>
            <Form.Control
              type='number'
              placeholder='quantity'
              name='quantity'
            />
          </FloatingLabel>
          <FloatingLabel
            controlId='supplier name,'
            label='supplier name,'
            className='mb-3'>
            <Form.Control
              type='text'
              placeholder='supplier name'
              name='supplier_name'
            />
          </FloatingLabel>
          <Form.Select aria-label='Default select example' name='sold'>
            <option>Sold</option>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </Form.Select>
          <input type='submit' className='btn btn-dark w-100 mt-4' />
        </>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddItems;
