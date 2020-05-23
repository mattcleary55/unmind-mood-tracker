import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { CheckIn, Insights } from './pages';
import { NavigationBar } from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />

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
