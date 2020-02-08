import React from 'react';
import './App.css';
import Form from './page/form-page/form.page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Dashboard } from './page/dashboard/dashboard.page';


function App() {

  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route  path="/dashboard">
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
