import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import Graph from './componets/Graph'
import Home from './pages/Home'
import CitizenScience from './pages/CitizenScience.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'antd/dist/antd.css'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/lang/:lang" component={Home}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/cs" component={CitizenScience}></Route>
      </Switch>
    </Router>

  );
}

export default App;
