import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebaseinit';

const ManageItems = () => {
  const [inventories, setInventories] = useState();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      const url = `https://phinventory.herokuapp.com/myItem?email=${user?.email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setInventories(data);
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

  const handleDelete = (id) => {
    fetch(`https://phinventory.herokuapp.com/inventory/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          const data1 = inventories.filter((inventory) => inventory._id !== id);
          setInventories(data1);
        },
        // this is the data we get after doing the delete request, do whatever you want with this data
      );
  };
  return (
    <div>
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
      </div>
    </div>
  );
};

export default ManageItems;
