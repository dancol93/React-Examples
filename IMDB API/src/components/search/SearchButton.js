import React, { Component } from 'react';

export default class SearchButton extends Component {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick(event) {
    event.preventDefault();
    this.props.onClick();
  }

  render() {
    return(<button className='button-search' onClick={this._onClick}>Buscar</button>);
  }
}
