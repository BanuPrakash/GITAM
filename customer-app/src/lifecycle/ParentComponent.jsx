import React, { Component } from 'react'
import NameComponent from './NameComponent'
import AgeComponent from './AgeComponent'
import { faker } from '@faker-js/faker';

export default class ParentComponent extends Component {
    state = {
        name : "Roger",
        age : 25
    }
  changeAge() {
    this.setState({
        age: this.state.age + 1
    })
  }

  changeName() {
    this.setState({
        name: faker.person.fullName()
    })
  }
  render() {
    console.log("Parent renders")
    return (
      <div>
        <button type='button' onClick={() => this.changeAge()}>Change Age</button> <br />
        <button type='button' onClick={() => this.changeName()}>Change Name</button> <br />
        <NameComponent name={this.state.name} /> <br />
        <AgeComponent age = {this.state.age} /> <br />
      </div>
    )
  }
}
