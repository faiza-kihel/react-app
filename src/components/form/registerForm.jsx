import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import * as userService from "../../services/userService";
class RegisterForm extends Form {
  //initialize state
  state = { data: { username: "", password: "", name: "" }, errors: {} };
  //create ref for form
  username = React.createRef();
  password = React.createRef();
  name = React.createRef();
  //create schema
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Label"),
  };
  doSubmit = async () => {
    try {
      await userService.register(this.state.data);
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
          <form onSubmit={this.handleSubmit} className="mb-2">
            {this.renderInput("username", "Username", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name", "text")}
            {this.renderButton("Register")}
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
