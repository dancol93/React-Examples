import React, { Component, PropTypes } from 'react';

export default class MovieItem extends Component {
  constructor() {
    super();
  }



  render() {
    return(
      <div className='item-container' >
        <h3>{this.props.title}</h3>
        <p>{this.props.year}</p>
        <p>{this.props.type}</p>
        <img className='image' src={this.props.poster} alt=""/>
      </div>
    )
  }
}
