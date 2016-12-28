import React, {Component} from 'react';
//Components
import MovieItem from './MovieItem';

export default class MovieList extends Component {
  constructor() {
    super();
  }

  render() {
    let movies = this.props.movies.map((value, index) => {
      return <MovieItem className="movie"
        key={index}
        title={value.Title}
        id={value.imdbID}
        year={value.Year}
        type={value.Type}
        poster={value.Poster}/>
    })
    console.log(movies);
    return(
      <div className="movie-list">
        {movies}
      </div>
    )
  }
}
