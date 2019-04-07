import React, { Component } from 'react';


class Admin extends Component {
  state = {
    name: "",
    color: "",
    inventory: []

  };

  handleSubmit = async e => {
    const url = "http://localhost:4000/inventory"
    const data = JSON.stringify({
      name: this.state.name,
      color: this.state.color
    })
    await e.preventDefault();
    fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    })
      //this will refresh the window once you hit submit
      .then(() => window.location.reload(true));
  };

onChange = e => this.setState({ [e.target.name]: e.target.value })

  componentDidMount() {
    return fetch("http://localhost:4000/inventory")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ inventory: data });
      });
  }

  render() {
    const myInventory = this.state.inventory.map(item => {
      return (
        <div className="container d-flex justify-content-end" >
          <section className="card-deck mb-3 text-center card w-25 ">
          <section className="card mb-4 shadow-sm">
            <div className="card-header" >
              <h4 >{ item.name } </h4>
            </div>
            <div className="card-body">
              <h1>{item.color}</h1>
              <button>Buy Now</button>
            </div>
          </section>
          </section>
        </div>
      )
    })
    //this will show you state and see the data put into "info"
    //you can remove the console log, this is just to see the state initially
    console.log("info:", this.state.inventory);
    return (
      <div>
        <h2>From Admin</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInput">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="exampleInput"
              placeholder="Enter Name"
              // the onchange uses an event listener to set state "name" and uses
              // e.target.value to take the input from the form and set that to state
              onChange={this.onChange}
              // e => this.setState({ name: e.target.value })
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInput">Color</label>
            <input
              type="text"
              className="form-control"
              name="color"
              id="exampleInput"
              placeholder="Enter Color"
              // the onchange uses an event listener to set state "name" and uses
              // e.target.value to take the input from the form and set that to state
              onChange={this.onChange}
              // e => this.setState({ lastName: e.target.value })
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="exampleInput">Additional Facts</label>
            <input
              type="text"
              className="form-control"
              name="facts"
              id="exampleInput"
              placeholder="Enter additional info"
              // the onchange uses an event listener to set state "name" and uses
              // e.target.value to take the input from the form and set that to state
              onChange={this.onChange}
              // e => this.setState({ facts: e.target.value })
            />
          </div> */}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <div>
            {/* within {} we can call our map function to display our data that has been mapped */}
            <div>
            {/* {myList} */}
            </div>
           <section>
             {myInventory}
           </section>
          </div>
        </form>
      </div>
    );
  }
}

export default Admin;