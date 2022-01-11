import React from "react";
import Joi from "joi-browser";
import * as authService from "../../services/authService";

import Form from "../common/form";
class LoginForm extends Form {
  state = { data: { username: "", password: "" }, errors: {} };
  //schema of form fields
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  username = React.createRef();
  password = React.createRef();

  doSubmit = async () => {
    const { data } = this.state;
    try {
      const { data: jwt } = await authService.login(data.email, data.password);
      console.log("jwt", jwt);
      localStorage.setItem("token", jwt.token);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3 mb-4">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username", "text")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
