import React, { Component } from "react";
import MovieList from "../context/MovieList";
class MoviePage extends Component {
  render() {
    return (
      <div>
        <MovieList />
      </div>
    );
  }
}

export default MoviePage;
