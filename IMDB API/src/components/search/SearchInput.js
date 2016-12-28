import React, {Component} from 'react';

class SearchInput extends Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
  }

  _onChange(event) {
    let title = event.target.value;
    this.props.onChange(title);
  }

  render() {
    return (<input placeholder='Busca tu película, serie o juego favorito' type="text" className="input-search" onChange = {this._onChange}/>);
  }
}

export default SearchInput;
