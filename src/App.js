import logo from './logo.svg';

import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

import RequireAuth from './Pages/RequireAuth/RequireAuth';
import UpdateInventory from './Pages/UpdateInventory/UpdateInventory';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import AddItems from './AddItems/AddItems';
import MyItem from './MyItem/MyItem';
import Footer from './Pages/Shared/Footer/Footer';
import ManageItems from './Pages/ManageItems/ManageItems';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='App'>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route
          path='/inventory/:id'
          element={
            <RequireAuth>
              <UpdateInventory></UpdateInventory>
            </RequireAuth>
          }></Route>
        <Route
          path='/manage'
          element={<ManageInventories></ManageInventories>}></Route>
        <Route
          path='/additem'
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }></Route>
        <Route
          path='/myitem'
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }></Route>
        <Route path='manageitem' element={<ManageItems></ManageItems>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
