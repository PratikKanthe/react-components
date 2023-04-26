import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Pratik"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Pratik"
            });
        }, 3000)
    }

  render() {
    console.log("Parent Comp");
    return (
      <div>
        i'm the Parent Component 
        <RegComp name={this.props.name} />    
        <PureComp name={this.props.name} />    
    </div>
    )
  }
}

export default ParentComp