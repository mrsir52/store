import React, { Component } from 'react'
import getJWT from './helpers/jwt'
import {withRouter} from 'react-router-dom'

export class AuthenticatedComponent extends Component {
  
      state = {
        user: undefined
      }
      
componentDidMount(){
    const jwt = getJWT();
    if(!jwt) {
        this.props.history.push('/Login')
    } else {
      this.props.history.push('/Admin')
    }
}

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(AuthenticatedComponent)