import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import LoginForm from "../Components/LoginForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <LoginForm />
      </React.Fragment>
    );
  }
}

export default Login;
