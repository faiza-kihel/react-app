import React from "react";
import { Link } from "react-router-dom";

const MoviesTable = (props) => {
  const { movies, onDelete, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Stock</th>
          <th onClick={() => onSort("numberInStock")}>Genre</th>
          <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </td>
            <td>{movie.stock}</td>
            <td>{movie.genre}</td>
            <td>{movie.rate}</td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="button button btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
