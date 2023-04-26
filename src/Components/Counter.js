import React, { Component } from 'react'
import UpdatedComp from '../HigherOrder'

export class Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           increament: 0
        }
      }
      add = () => {
        this.setState({increament: this.state.increament + 1})
      }
  render() {
    const {increament} = this.state
    return (
      <div>
        <button onMouseOver={this.add}> {this.props.name} increamented {increament} </button>
      </div>
    )
  }
}

export default UpdatedComp(Counter);