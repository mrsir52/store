import React, { Component, Fragment } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Admin from './components/Admin'

export class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <nav className=" navbar navbar-dark bg-primary m-1">
              <Link className="nav-item" to="/" title="Home">
                Home
              </Link>
              <Link className="nav-item" to="/Admin" title="Admin">
                Admin
              </Link>
            </nav>
            <div className="nav-link">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Admin" component={Admin} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default Routing;
