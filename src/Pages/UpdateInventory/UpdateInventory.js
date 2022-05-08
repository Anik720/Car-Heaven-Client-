// import { async } from '@firebase/util';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Button, Card, Table } from 'react-bootstrap';
// import { Link, useParams } from 'react-router-dom';

// const UpdateInventory = () => {
//   const { id } = useParams();

//   const [inventory, setInventory] = useState([]);
//   useEffect(() => {
//     fetch(`https://phinventory.herokuapp.com/inventory/${id}`)
//       .then((res) => res.json())
//       .then((data) => setInventory(data));
//   }, []);

//   const handleQuantity = async () => {

//     fetch(`https://phinventory.herokuapp.com/delivered/${id}`, {
//       method: 'PUT',
//     })
//       .then((response) => response.json())
//       .then((result) => {

//         setInventory(result);
//       });

//   };
//   const handlerRestock = (e) => {
//     e.preventDefault();
//     const result = e.target.restock.value;
//     console.log(result);
//     fetch(`https://phinventory.herokuapp.com/restock/${id}?value=${result}`, {
//       method: 'PUT',
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log('Success:', result);
//         setInventory(result);
//       });
//   };

//   console.log(inventory.quantity);
//   return (
//     <div>
//       <div className='d-flex justify-content-center'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant='top' src={inventory.image} />
//           <Card.Body>
//             <Card.Title>Name: {inventory.name}</Card.Title>
//             <Card.Text>Price: {inventory.price}</Card.Text>
//             <Card.Text>Description: {inventory.description}</Card.Text>
//             <Card.Text>Quantity: {inventory.quantity}</Card.Text>
//             <Card.Text>Supplier_name: {inventory.supplier_name}</Card.Text>
//             <Card.Text>Sold: {inventory.sold}</Card.Text>
//           </Card.Body>
//         </Card>
//       </div>
//       <div className='d-flex justify-content-center'>
//         <button
//           type='button'
//           className='btn btn-dark '
//           onClick={handleQuantity}>
//           Delivery
//         </button>
//       </div>
//       <div>
//         <form onSubmit={handlerRestock} className='m-auto w-50'>
//           <div className='mb-3'>
//             <label className='form-label'>Restock</label>
//             <input type='number' className='form-control' name='restock' />
//             <input type='submit' className='btn btn-primary'></input>
//           </div>

//         </form>
//       </div>
//       <div className='d-flex justify-content-center'>
//         <Link to='/manage'>
//           <button className='btn btn-dark'>Manage Item</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default UpdateInventory;
import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './UpdateInventory.css';
const UpdateInventory = () => {
  const { id } = useParams();
  //console.log(id);
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch(`https://phinventory.herokuapp.com/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  //console.log(inventory);

  const handleQuantity = async () => {
    // const data = await axios.put(`http://localhost:5000/delivered/${id}`);
    // const result = data.data;
    // console.log('result is' + data);

    fetch(`https://phinventory.herokuapp.com/delivered/${id}`, {
      method: 'PUT',
    })
      .then((response) => response.json())
      .then((result) => {
        //console.log('Success:', result);
        setInventory(result);
      });
    toast('Item delivered');
    //setInventory( result);
  };
  const handlerRestock = (e) => {
    e.preventDefault();
    const result = e.target.restock.value;
    if (result < 0) {
      return alert('Please put a positive number');
    }
    console.log(result);
    fetch(`https://phinventory.herokuapp.com/restock/${id}?value=${result}`, {
      method: 'PUT',
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);

        setInventory(result);
      });
    toast('Item Restocked');
  };

  console.log(inventory.quantity);
  return (
    <div className=''>
      <div className='m-auto habu container'>
        <Card className='masud' style={{ width: '80%' }}>
          <Card.Img variant='top' src={inventory.image} className='car-img' />
          <Card.Body className='car-body'>
            <Card.Title>ID: {inventory._id}</Card.Title>
            <Card.Title>Name: {inventory.name}</Card.Title>
            <Card.Text>Price: {inventory.price}</Card.Text>
            <Card.Text>Description: {inventory.description}</Card.Text>
            <Card.Text>Quantity: {inventory.quantity}</Card.Text>
            <Card.Text>Supplier_name: {inventory.supplier_name}</Card.Text>
            <Card.Text>Sold: {inventory.sold}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='d-flex justify-content-center'>
        <button
          type='button'
          className='btn btn-dark mt-3'
          onClick={handleQuantity}>
          Delivery
        </button>
      </div>
      <div>
        <form onSubmit={handlerRestock} className='m-auto w-50'>
          <div className='mb-3'>
            <label className='form-label text-center'>
              Restock The quantity of the item
            </label>
            <input type='number' className='form-control' name='restock' />
            <input type='submit' className='btn btn-dark mt-3'></input>
          </div>

          {/* <button
            type='button'
            onClick={handlerRestock}
            className='btn btn-primary'>
            Submit
          </button> */}
        </form>
      </div>
      <div className='d-flex justify-content-center'>
        <Link to='/manage'>
          <button className='btn btn-dark'>Manage Inventory</button>
        </Link>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateInventory;
