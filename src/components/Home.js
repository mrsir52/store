import React, { Component } from "react";

class Home extends Component {
  state = {
    name: "",
    color: "",
    inventory: [],
    cart: []
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  componentDidMount() {
    const url = "http://localhost:4000/inventory";
    return fetch(url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ inventory: data });
      });
  }

  addToInventory = async e => {
    const url = "http://localhost:4000/cart"
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
      // .then(() => window.location.reload(true));
  };

  render() {
    const myList = this.setState.inventory.map(({name, color, id}) => {
      return (
        <div className="container d-flex justify-content-center inline-flex">
          <section className="card-deck mb-3 text-center card w-25 ">
            <section className="card mb-4 shadow-sm row">
              <div className="card-header ">
                <label>Item Name <input value={name} name="name" type="text" onChange={this.onChange}></input></label>
                <label>Item Color<input value={color} name="name" type="text" onChange={this.onChange}></input></label>
                  {/* {name} {color} */}
                
              </div>
              <div className="card-body">
                {/* <h1>{item.available}</h1> */}
                <button onClick={this.addToInventory}>Add To </button>
              </div>
            </section>
          </section>
        </div>
      );
    });
    return <div className="container">{myList}</div>;
  }
}

export default Home;
