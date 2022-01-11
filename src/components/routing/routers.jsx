import React from "react";
import Home from "./home";
import Admin from "./admin";
import Products from "./products";
import Posts from "./posts";
import Navbar from "./navbar";
import Movies from "../movies/movies";
import NotFound from "../routing/noFound";
import LoginForm from "../form/loginForm";
import RegisterForm from "../form/registerForm";
import { Route, Switch, Redirect } from "react-router-dom";
import MoviesForm from "../form/moviesForm";
import jwtDecode from "jwt-decode";

class Router extends React.Component {
  state = {};
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <div>
        <Navbar user={this.state.user} />
        <Switch>
          <Route path="/movies/:id" component={MoviesForm}></Route>
          <Route path="/movies/add/:id" component={MoviesForm}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/posts" component={Posts}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/register" component={RegisterForm}></Route>
          <Redirect exact from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default Router;
