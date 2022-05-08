import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInventories from '../../../Hooks/useInventories';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
  const [inventories, setInventories] = useInventories();

  return (
    <div>
      <div className='inventory-container'>
        {inventories.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
      <div className='d-flex justify-content-center'>
        <Link to='/manage'>
          <button type='button' className='btn btn-dark m-auto'>
            Manage Inventories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Inventories;
