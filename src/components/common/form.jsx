import React from "react";
import Joi from "joi-browser";
import Input from "./input";
class Form extends React.Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  //add movies to table
  add = () => {
    // const data = { ...this.state.data };
    // data.id = this.props.match.params.id;
    //const movies = { ...this.state.movies };
    console.log("movies", this.props.match.params.movies);
    // movies.push(data);
    // return this.setState({ movies });
  };
  handleSubmit = (e) => {
    this.add();
    e.preventDefault();
    this.doSubmit();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  renderButton(label) {
    return (
      <button
        className="btn btn-primary"
        disabled={this.validate()}
        onClick={this.handleSubmit}
      >
        {label}
      </button>
    );
  }
  renderInput(name, label, type) {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        type={type}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
