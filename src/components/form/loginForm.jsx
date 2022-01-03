import React from "react";
class LoginForm extends React.Component {
  state = { account: { username: "", password: "" } };
  username = React.createRef();
  password = React.createRef();
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subbmit");
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    console.log(account);
    return this.setState({ account });
  };
  render() {
    return (
      <div>
        <form action="">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={this.username}
              value={this.state.account.username}
              onChange={this.handleChange}
              autoFocus
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              ref={this.password}
              value={this.state.account.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary " onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
