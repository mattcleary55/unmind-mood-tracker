import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const NavigationBar: React.FC = () => (
  <Navbar bg='light' variant='light'>
    <Nav className='mr-auto'>
      <Nav.Link href='/'>Check In</Nav.Link>

      <Nav.Link href='/mood-insights'>Mood Insights</Nav.Link>
    </Nav>
  </Navbar>
);
