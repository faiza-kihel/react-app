import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class MoviesForm extends Form {
  //init state
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: "" },
    errors: {},
  };
  //create ref
  title = React.createRef();
  genre = React.createRef();
  numberInStock = React.createRef();
  rate = React.createRef();
  //init schema
  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().required().label("Number in stock"),
    rate: Joi.number().required().label("Rate"),
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3 mb-4">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("title", "Title", "text")}
            {this.renderInput("genre", "Genre", "text")}
            {this.renderInput("numberInStock", "Number in stock", "number")}
            {this.renderInput("rate", "Rate", "number")}
            {this.renderButton("Save")}
          </form>
        </div>
      </div>
    );
  }
}

export default MoviesForm;
