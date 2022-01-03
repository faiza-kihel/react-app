import React from "react";
import { getMovies } from "../../services/fakeServices";
import Pagination from "../common/pagination";
import Genres from "./genres";
import { paginate } from "../../utils/paginate";
import { getGenres } from "../../services/genreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
class Movies extends React.Component {
  state = {
    movies: [],
    genres: [],
    itemCount: 0,
    pageSize: 4,
    currentPage: 1,
    onActive: false,
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }
  //count number of movies
  count() {
    const itemCount =
      this.state.movies.length === 0 ? 0 : this.state.movies.length;

    return this.setState({ itemCount });
  }
  //delete movie
  handelDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m.id !== movie.id);
    return this.setState({ movies });
  };
  //change current page
  handlePageChange = (page) => {
    return this.setState({ currentPage: page });
  };
  //filter table by genre
  handleFilter = (genre) => {
    return this.setState({ selectedGenre: genre });
  };
  //sort table
  handleSort = (col) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === col) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = col;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
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
      sortColumn,
    } = this.state;
    const filter =
      selectedGenre && selectedGenre.id !== 4
        ? allMovies.filter((m) => m.genre === selectedGenre.name)
        : allMovies;
    const filtred = _.orderBy(filter, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(filtred, currentPage, pageSize);

    return (
      <div>
        {itemCount === 0 ? (
          <h1>No movies in database</h1>
        ) : (
          <h1>Number of movies {this.count()}</h1>
        )}

        <div className="row">
          <div className="col-2">
            <Genres
              genres={genres}
              onFilter={this.handleFilter}
              onActive={onActive}
              allMovies={allMovies}
              selectedGenre={selectedGenre}
            />
          </div>
          <div className="col">
            <MoviesTable
              onDelete={this.handelDelete}
              movies={movies}
              onSort={this.handleSort}
            />
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
