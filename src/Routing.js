import React, { Component, Fragment } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Admin from './components/Admin'
import Cart from "./components/Cart";
import Login from "./components/Login";
import AuthenticatedComponent from "./components/Auth";




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

              <Link className="nav-item" to="/Login" title="Login">
                Login
              </Link>
             
            </nav>
            <div className="nav-link">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Cart" component={Cart} />
                
                <AuthenticatedComponent >
                <Route exact path="/Login" component={Login} />
                  <Route exact path="/Admin" component={Admin} /> 
                </AuthenticatedComponent>
                
                
             

              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Routing;
