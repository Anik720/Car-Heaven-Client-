import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebaseinit';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const logout = () => {
    signOut(auth);
  };

  const handleAddItem = () => {};
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img
              src='https://img.freepik.com/free-vector/car-logo-vector_25327-40.jpg'
              alt=''
              width='70px'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/blogs'>
                Blogs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              {user && (
                <Link to='/manageitem'>
                  <button className='btn btn-dark'>Manage Item</button>
                </Link>
              )}
              {user && (
                <Link to='/additem'>
                  <button className='btn btn-dark'>Add Item</button>
                </Link>
              )}
              {user && (
                <Link to='/myitem'>
                  <button className='btn btn-dark'>My Item</button>
                </Link>
              )}

              {user ? (
                <button type='button' onClick={logout} className='btn btn-dark'>
                  signout
                </button>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  <button type='button' className='btn btn-dark'>
                    Login
                  </button>
                </Nav.Link>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
