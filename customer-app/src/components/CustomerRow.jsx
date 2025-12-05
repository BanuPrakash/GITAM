import React, { Component } from 'react'

export default class CustomerRow extends Component {
  
  deleteRow(id) {
    console.log("Delete Row", id);
    this.props.delEvent(id);
  }

  render() {
     let {id, firstName, lastName} = this.props.customer; // comming from parent
    return (
      <div>
        {firstName} {lastName} 
        <button type='button' 
          onClick={() => this.deleteRow(id)}>Delete</button>
      </div>
    )
  }
}
