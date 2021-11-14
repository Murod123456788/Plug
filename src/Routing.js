import React from 'react';
import HomeMain from './home/HomeMain';
import './styles/main.scss';
import './styles/responsive.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeMain} />
      </Switch>
    </Router>
  );
}

export default Routing;
