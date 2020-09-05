import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import List from './components/List';

function App() {
  return (
    <Router>
    <div className="App">     
    <NavBar />
    <Switch>
      <Route exact path="/list" component={List} />      
    </Switch>

    </div>
    </Router>
  );
}

export default App;