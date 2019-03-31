import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Fragment>
      <nav className=" navbar navbar-dark bg-primary m-1" >
        <Link className="nav-item" to="/" title="Home">
          Home
        </Link>
        <Link
          className="nav-item"
          to="/Admin"
          title="Admin"
        >
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
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
