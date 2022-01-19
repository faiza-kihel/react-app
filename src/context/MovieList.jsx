import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  static contextType = UserContext;
  componentDidMount() {
    console.log("context", this.context);
  }
  render() {
    return (
      // <UserContext.Consumer>
      //   {(userContext) => (
      //     <div>
      //       Movie List{" "}
      //       {userContext.currentUser ? userContext.currentUser.name : ""} 
      //     </div>
      //   )}
      // </UserContext.Consumer>
      <MovieRow />
    );
  }
}

export default MovieList;
