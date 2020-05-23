import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const NavigationBar: React.FC = () => (
  <Navbar bg='light' variant='light'>
    <Nav className='mr-auto'>
      <Nav.Link href='/'>Check In</Nav.Link>
      <Nav.Link href='insights'>Insights</Nav.Link>
    </Nav>
  </Navbar>
);
