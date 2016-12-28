import React, {Component} from 'react';
//Components
import SearchBar from './SearchBar';
import MovieList from '../result/MovieList';
//Api
import {searchOMDB} from '../lib/omdb_api';

class MovieFinder extends Component {
  constructor() {
    super();
    this.state = {movies: []}
    this.search = this.search.bind(this)
  }

  search(title) {
    if (title != '') {
      searchOMDB(title)
      .then((movies) => {this.setState({movies: movies.Search})})
    }
    else {
      this.setState({movies: []})
    }
  }

  render() {
    return(
      <div className="movie-finder">
        <SearchBar search={this.search}/>
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default MovieFinder
