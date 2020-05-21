import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { CheckIn, Insights } from './pages';
import { NavigationBar } from './components/NavBar';

import './App.css';

// <nav>
// <ul>
//   <li>
//     <Link to='/'>Check-In</Link>
//   </li>
//   <li>
//     <Link to='/insights'>Insights</Link>
//   </li>
// </ul>
// </nav>

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/insights'>
            <Insights />
          </Route>
          <Route path='/'>
            <CheckIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
