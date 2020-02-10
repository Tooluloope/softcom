import React from 'react';
import './App.css';
import Form from './page/form-page/form.page';
import { createBrowserHistory } from 'history';

import {
   Router,
  Switch,
  Route,
} from "react-router-dom";
import { Dashboard } from './page/dashboard/dashboard.page';

export const history = createBrowserHistory();

function App() {

  
  return (
    <Router history = {history}>
      <div className="App">
        <Switch>
          <Route exact  path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Form />
          </Route>
          
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
