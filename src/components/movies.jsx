import React from "react";
import { getMovies } from "../services/fakeServices";
import Pagination from "./common/pagination";
import Genres from "./genres";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/genreService";
class Movies extends React.Component {
  state = {
    movies: [],
    genres: [],
    itemCount: 0,
    pageSize: 4,
    currentPage: 1,
    onActive: false,
    selectedGenre: null,
  };
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }
  count() {
    const itemCount =
      this.state.movies.length === 0 ? 0 : this.state.movies.length;

    return this.setState({ itemCount });
  }
  handelDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m.id !== movie.id);
    return this.setState({ movies });
  };
  handlePageChange = (page) => {
    return this.setState({ currentPage: page });
  };
  handleFilter = (genre) => {
    return this.setState({ selectedGenre: genre });
  };
  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      genres,
      onActive,
      itemCount,
      selectedGenre, 
    } = this.state;
    const filter = selectedGenre
      ? allMovies.filter((m) => m.genre === selectedGenre.name)
      : allMovies;
    const movies = paginate(filter, currentPage, pageSize);

    return (
      <div>
        {itemCount === 0 ? (
          <h1>No movies in database</h1>
        ) : (
          <h1>Number of movies {itemCount}</h1>
        )}

        <div className="row">
          <div className="col-2">
            <Genres
              genres={genres}
              onFilter={this.handleFilter}
              onActive={onActive}
            />
          </div>
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Stock</th>
                  <th>Genre</th>
                  <th>Rate</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie.id}>
                    <td>{movie.title}</td>
                    <td>{movie.stock}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.rate}</td>
                    <td>
                      <button
                        onClick={() => this.handelDelete(movie)}
                        className="button button btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemCount={filter.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
