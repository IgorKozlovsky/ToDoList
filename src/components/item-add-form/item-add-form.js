import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: ''
  }
  onLabalChange = (e) => {
    this.setState({
      label: e.target.value.toUpperCase()
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.onItemAdded(this.state.label)
    this.setState({
      label: ''
    })
  }
  render() {
    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
        <input type="text"
               className="form-control"
               onChange={this.onLabalChange} 
               placeholder="enter new task"
               value={this.state.label}/>
        <button
          className="btn btn-outline-secondary"
        >
          Add item
        </button>
      </form>
    );
  }
}
