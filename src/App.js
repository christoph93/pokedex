import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import List from './components/List';
import MyList from './components/MyList'

function App() {
  return (
    <Router>
    <div className="App">     
    <NavBar />
    <Switch>
      <Route exact path="/home" component={List} />      
      <Route exact path="/myList" component={MyList} />      
    </Switch>

    </div>
    </Router>
  );
}

export default App;