import React, { Component } from 'react'

export  default  class state extends Component {
  constructor(){
    super()
    this.state = {
      name:"React"
    }
  }

  render() {
    return (
      <div>
        <h1>hiii {this.state.name}</h1>
      </div>
      
    )
  }
}

