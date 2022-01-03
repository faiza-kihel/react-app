import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

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
  doSubmit() {
    console.log("submit");
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-6.offset-md-3.mb-4">
          <form onSubmit={this.handleSubmit}>
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
