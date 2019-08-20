import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import SignUpForm from "../Components/SignUpForm";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", passwprd: "" };
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div style={{ backgroundColor: "#e8f4fa", height: "100%" }}>
          <SignUpForm />
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
