import React, { Component } from 'react'
import {Route, Switch } from 'react-router-dom';
import Home from './component/home/home';

class Routes extends Component {
  render() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
        </Switch>
    )
  }
}
 export default Routes;