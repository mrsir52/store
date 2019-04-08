import React, { Component } from 'react'
import "../index.css"


export class Cart extends Component {
    state = {
        name: "",
        color: "",
        cart: []
    
      };

    componentDidMount() {
        const url = "http://localhost:4000/cart";
        return fetch(url)
          .then(results => {
            return results.json();
          })
          .then(data => {
            this.setState({ cart: data });
          });
      }

  render() {
    const myCart = this.state.cart.map(({name, color, _id, link}) => {
        return (
            <div className="col-sm-4 ">
            <section className="card-deck d-flex justify-content-center">
              <section className="card mb-4 ">
                <h5 className="card-header text-center">{name}</h5>
                <img src={link} className="card-img-top " alt="scuba mask" />
                <div className="card-body">
                  <p className="cart-text">Short description here</p>
                </div>
              </section>
            </section>
          </div>
        )
      })
    return (
      <div>
        <section className="container text-align-center">
          <div className="row">{myCart}</div>
        </section>
      </div>
    )
  }
}

export default Cart
