import React, { Component } from 'react';
// Components
import MovieFinder from './search/MovieFinder';

class App extends Component {
  constructor() {
    super();
    this.state = {movies: []};
  }

  render() {
    return(
      <div>
        <MovieFinder/>
      </div>
    )
  }
}

export default App;
