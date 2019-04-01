import React, { Component } from 'react';


class Admin extends Component {
  state = {
    name: "",
    lastName: "",
    facts: "",
    info: []
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = JSON.stringify({ ...this.state });
    fetch("http://localhost:4000", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    })
      //this will refresh the window once you hit submit
      .then(() => window.location.reload(true));
  };

  componentDidMount() {
    return fetch("http://localhost:4000")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ info: data });
      });
  }

  render() {
    const myList = this.state.info.map(person => {
      return (
        <div className="container d-flex justify-content-end">
          <section className="card-deck mb-3 text-center card w-25 ">
          <section className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4>{ person.name } {person.lastName}</h4>
            </div>
            <div className="card-body">
              <h1>{person.facts}</h1>
              <button>Buy Now</button>
            </div>
          </section>
         
         
          </section>
        </div>
      );
    });
    //this will show you state and see the data put into "info"
    //you can remove the console log, this is just to see the state initially
    console.log("info:", this.state.info);
    return (
      <div>
        <h2>From Admin</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInput">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInput"
              placeholder="Enter Name"
              // the onchange uses an event listener to set state "name" and uses
              // e.target.value to take the input from the form and set that to state
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInput">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInput"
              placeholder="Enter Name"
              // the onchange uses an event listener to set state "name" and uses
              // e.target.value to take the input from the form and set that to state
              onChange={e => this.setState({ lastName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInput">Additional Facts</label>
            <input
              type="text"
              className="form-control"
              id="exampleInput"
              placeholder="Enter additional info"
              // the onchange uses an event listener to set state "name" and uses
              // e.target.value to take the input from the form and set that to state
              onChange={e => this.setState({ facts: e.target.value })}
            />
          </div>

          <button type="submit" classname="btn btn-primary">
            Submit
          </button>

          <div>
            {/* within {} we can call our map function to display our data that has been mapped */}
            <div>
            {myList}
            </div>
           
          </div>
        </form>
      </div>
    );
  }
}

export default Admin;