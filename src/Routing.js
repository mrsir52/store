import React, { Component, Fragment } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Admin from './components/Admin'
import Cart from "./components/Cart";
import Login from "./components/Login";
import InventoryBucket from './sample/InventoryBucket'



export class Routing extends Component {
state = {
  info: []
}

    
  render() {
      
    return (
      <div>
        <Router>
          <Fragment>
            <nav className=" navbar navbar-dark bg-primary m-1">
              <Link className="nav-item" to="/" title="Home">
                Home
              </Link>
              <Link className="nav-item" to="/Cart" title="Cart">
                Cart
              </Link>
              <Link className="nav-item" to="/Admin" title="Admin">
                Admin
              </Link>
              <Link className="nav-item" to="/Admin/Login" title="Login">
                Login
              </Link>
              <Link className="nav-item" to="/ibucket" title="ibucket">
                ibucket
              </Link>
            </nav>
            <div className="nav-link">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Admin" component={Admin} />
                <Route exact path="/Cart" component={Cart} />
                <Route exact path="/Admin/Login" component={Login} />
                <Route exact path="/ibucket" component={InventoryBucket} />

              </Switch>
            </div>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default Routing;
