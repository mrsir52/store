import React, { Component } from "react";
import { redirect } from "react-router"
import {decode} from "jsonwebtoken"


export class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       token: "",
//       user: undefined
//     };
//   }

    state = {
        email: "",
      password: "",
      token: "",
      user: undefined
    }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      //mode: "cors",
      body: JSON.stringify({
        email: `${this.state.email}`,
        password: `${this.state.password}`
      }),
      headers: {
        "Content-Type": "application/JSON"
      }
    })
    .then((response) => response.json())
//     .then((data) => {
//         localStorage.setItem("jwt", data.token)
//         console.log(data)
        
        
//         // if (this.state.user !== undefined) {
//         //   this.props.history.push('/Cart')
//         // } else {
//         //   this.props.history.push('/Admin')
//         // }
//    })
   .then((data) => {
    const decoded = data.decode(data.token, {complete: true});
console.log(decoded.header);
console.log(decoded.payload)
   })
  };

  render() {
      console.log("stat:",this.state)
    return (
      <div>
        <h2>You must log in to view protected page</h2>
        <form onSubmit={this.handleSubmit}>
          <label>email</label>
          <input
            type="text"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
          />
          <label>email</label>
          <input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;