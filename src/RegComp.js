import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log("Regular Comp");
    return (
      <div>i'm the regular Component {this.props.name} </div>
    )
  }
}

export default RegComp