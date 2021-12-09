import React from "react";
class Genres extends React.Component {
  render() {
    const { genres, onFilter, onActive } = this.props;
    return (
      <ul className="list-group m-2">
        {genres.map((genre) => (
          <li
            key={genre.id}
            className={
              onActive === true ? "list-group-item active" : "list-group-item"
            }
            onClick={() => onFilter(genre)}
          >
            {genre.name}
          </li>
        ))}
        <li className="list-group-item">All movies</li>
      </ul>
    );
  }
}

export default Genres;
