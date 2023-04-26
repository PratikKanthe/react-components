import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("Pure Comp");
    return (
      <div>i'm the Pure Component {this.props.name}</div>
    )
  }
}

export default PureComp