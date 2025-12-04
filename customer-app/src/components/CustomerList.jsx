import React, { Component } from 'react'
import CustomerRow from './CustomerRow';

export default class CustomerList extends Component {
  x = 10; // is also a state, but not managed by react
  y= 15; // is also a state, but not managed by react
  state = {
    customers: [
      {"id": 1, "firstName": "Rachel", "lastName": "Green"},
      {"id": 2, "firstName": "Phobhe", "lastName": "Buffay"},
      {"id": 3, "firstName": "Ross", "lastName": "Geller"},
      {"id": 4, "firstName": "Joey", "lastName": "Tribuanni"},
      {"id": 5, "firstName": "Chandler", "lastName": "Bing"},
      {"id": 6, "firstName": "Monica", "lastName": "Geller"}
    ]
  }
  render() {
    return (
      <div>
        {
          this.state.customers.map(customer => <CustomerRow />)
        }
      </div>
    )
  }
}

