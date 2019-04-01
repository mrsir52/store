import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="container">  
        <section className="card-deck mb-3 text-center">
          <section className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4>Free</h4>
            </div>
            <div className="card-body">
              <h1>"0"</h1>
              <button>Buy Now</button>
            </div>
          </section>
          <section className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4>#2</h4>
            </div>
            <div className="card-body">
              <h1>"0"</h1>
              <button>Buy Now</button>
            </div>
          </section>
          <section className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4>#3</h4>
            </div>
            <div className="card-body">
              <h1>"0"</h1>
              <button>Buy Now</button>
            </div>
          </section>
        </section>

        <h2>From Home</h2>
      </div>
    );
  }
}

export default Home;
