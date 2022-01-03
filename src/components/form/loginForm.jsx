import React from "react";
import Joi from "joi-browser";

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

  doSubmit() {
    console.log("submit");
  }

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
