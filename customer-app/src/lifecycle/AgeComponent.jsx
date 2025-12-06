import React, { Component } from 'react'

export default class AgeComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.age === nextProps.age) {
        return false;
    }
    return true;
  }
  render() {
    console.log("Age Comp renders!!!")
    return (
      <div>
        In AgeComponent age: {this.props.age}
      </div>
    )
  }
}
