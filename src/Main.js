import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Neckwear from "./Neckwear";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Brian's React Attempts</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/neckwear">Neckwear</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/neckwear" component={Neckwear}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;