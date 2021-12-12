import React from "react";
class Genres extends React.Component {
  render() {
    const { genres, onFilter, selectedGenre } = this.props;
    return (
      <ul className="list-group m-2">
        {genres.map((genre) => (
         
          <li
            key={genre.id}
            className={genre === selectedGenre ? "list-group-item active" : "list-group-item"}
            onClick={() => onFilter(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Genres;
