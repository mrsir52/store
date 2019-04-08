import React, { Component } from "react";
import "../index.css";

class Home extends Component {
  state = {
    name: "",
    color: "",
    inventory: [],
    cart: []
  };

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

  addToInventory = async (e, id, name, color, link) => {
    const url = "http://localhost:4000/cart";
    const data = JSON.stringify({
      name: name,
      color: color,
      link: link
    });
    e.preventDefault();
    await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    });
    //this will refresh the window once you hit submit
    // .then(() => window.location.reload(true));
  };

  render() {
    const myList = this.state.inventory.map(({ name, color, _id, link }) => {
      return (
        <div className="col-sm-4">
          <section className="card-deck">
            <section className="card mb-4">
              <h5 className="card-header ">{name}</h5>
              <img src={link} className="card-img-top" alt="scuba mask" />
              <div className="card-body">
                <p className="cart-text ">Short description here</p>
                <section className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={e => this.addToInventory(e, _id, name, color, link)}>
                  Add To Cart
                </button>
                </section>
                

              </div>
            </section>
          </section>
        </div>
      );
    });
    return (
      <div>
        <section className="container text-align-center">
          <div className="row">{myList}</div>
        </section>
      </div>
    );
  }
}

export default Home;
