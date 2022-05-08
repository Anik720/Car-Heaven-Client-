import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Inventory from '../Home/Inventory/Inventory';
import useInventories from './../../Hooks/useInventories';

const ManageInventories = () => {
  const [inventories, setInventories] = useState();

  useEffect(() => {
    fetch('https://phinventory.herokuapp.com/inventory')
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, [inventories]);

  const handleDelete = (id) => {
    fetch(`https://phinventory.herokuapp.com/inventory/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          setInventories(inventories);
        },
        // this is the data we get after doing the delete request, do whatever you want with this data
      );
    toast('Item deleted');
  };
  return (
    <div>
      <Table
        striped
        bordered
        hover
        variant='dark'
        responsive
        style={{ overflowX: 'scroll' }}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>

            <th>quantity</th>
            <th>supplier_name</th>
            <th>sold</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {inventories?.map((inventory) => (
            <tr>
              <td>{inventory._id}</td>
              <td>{inventory.name}</td>
              <td>{inventory.price}</td>

              <td>{inventory.quantity}</td>
              <td>{inventory.supplier_name}</td>
              <td>{inventory.sold}</td>
              <td>
                {' '}
                <button type='button' className='btn btn-success d-inline'>
                  Edit
                </button>
              </td>
              <td>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => handleDelete(inventory._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='d-flex justify-content-center'>
        <Link to='/additem'>
          <button className='btn btn-danger'>Add new Item</button>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageInventories;
