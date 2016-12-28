import React, {Component} from 'react';
//Components
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {title: ''};
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  handleSearchInput(title) {
    this.setState({title});
  }

  handleSearchButton() {
    this.props.search(this.state.title);
  }

  render() {
    return(
      <div className="search-bar-container">
        <form>
          <SearchInput onChange={this.handleSearchInput}/>
          <SearchButton onClick={this.handleSearchButton}/>
        </form>
      </div>
    )
  }
}

export default SearchBar;
