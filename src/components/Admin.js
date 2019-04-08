import React, { Component } from "react";
import "../index.css";

class Admin extends Component {
  state = {
    name: "",
    color: "",
    inventory: []
  };

  deleteFromInventory = async (e, _id, name, color, link) => {
    const url = "http://localhost:4000/inventory";
    const data = JSON.stringify({
      _id: _id
    });
    console.log(data);
    e.preventDefault();
    await fetch(url, {
      method: "DELETE",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    })
      //this will refresh the window once you hit submit
      .then(() => window.location.reload(true));
  };

  handleSubmit = async e => {
    const url = "http://localhost:4000/inventory";
    const data = JSON.stringify({
      name: this.state.name,
      color: this.state.color
    });
    console.log(data);
    e.preventDefault();
    await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    })
      //this will refresh the window once you hit submit
      .then(() => window.location.reload(true));
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

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
    const myInventory = this.state.inventory.map(
      ({ name, color, _id, link }) => {
        return (
          <div className="col-sm-4" key={_id}>
            <section className="card-deck ">
              <section className="card mb-4">
                <h5 className="card-header text-center">{name}</h5>
                <img src={link} className="card-img-top " alt="scuba mask" />
                <div className="card-body text-center">
                  <p className="cart-text ">Short description here</p>
                  <section className="d-flex justify-content-center">
                  <button className="btn btn-primary m-1">edit</button>
                  <button
                    className="btn btn-danger m-1"
                    onClick={e =>
                      this.deleteFromInventory(e, _id, name, color, link)
                    }
                  >
                    delete
                  </button>
                  </section>
                  
                </div>
              </section>
            </section>
          </div>
        );
      }
    );
    //this will show you state and see the data put into "info"
    //you can remove the console log, this is just to see the state initially
    console.log("info:", this.state.inventory);
    return (
      <div className="container">
        <h1>Inventory List</h1>

        {/* Start of Form section */}
        <section className="text-align-center mb-4">
        <form className="align-center" onSubmit={this.handleSubmit}>
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
          
        </form>
        <section className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </section>
        
        </section> 
        {/* End of form */}

        <div>
          <section className="container">
            <div className="row">{myInventory}</div>
          </section>
        </div>
      </div>
    );
  }
}

export default Admin;
