import React, { Component } from 'react';
import "../index.css"


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
    const myInventory = this.state.inventory.map(({name, color, _id, link}) => {
      return (
        
        <div className="col-sm-4">
          <section className="card-deck ">
          <section className="card mb-4">
          <h5 className="card-header text-center">{name}</h5>
          <img src={link} className="card-img-top " alt="scuba mask"></img>
            <div className="card-body text-center">
            <p className="cart-text ">Short description here</p>
            <a href="#" className="btn btn-primary m-1 ">edit</a>
            <a href="#" className="btn btn-danger m-1">delete</a>
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
             <label htmlFor="exampleInput">Image Address</label>
            <input
              type="text"
              className="form-control"
              name="link"
              id="exampleInput"
              placeholder="Enter Image Address"
              // the onchange uses an event listener to set state "name" and uses
              // e.target.value to take the input from the form and set that to state
              onChange={this.onChange}
              // e => this.setState({ lastName: e.target.value })
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          
        </form>
        <div>
           <section className="container">
           <div className="row">
{myInventory}
           </div>
             
           </section>
          </div>
      </div>
    );
  }
}

export default Admin;