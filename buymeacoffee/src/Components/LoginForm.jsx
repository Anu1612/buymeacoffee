import React from "react";
import InputField from "./InputField";
import { withRouter } from "react-router-dom";

const LoginForm = props => {
  return (
    <div className="form-container">
      <form>
        <div style={{ textAlign: "center" }}>
          <h1>Sign In</h1>
        </div>
        <div className="social-container" style={{ width: "100%" }}>
          <i className="fab fa-facebook-square" />
          <i className="fab fa-google-plus-square" />
          <i className="fab fa-twitter-square" />
        </div>
        <div style={{ textAlign: "center", marginTop: "3%" }}>
          or use your Account
        </div>
        <InputField
          name="email"
          type="text"
          placeholder="Email"
          handleInputChange={() => {
            console.log("inhere");
          }}
        />
        <InputField
          name="password"
          type="password"
          placeholder="Password"
          handleInputChange={() => {
            console.log("inhere");
          }}
        />
        <div>
          <button type="submit" className="create-account-button">
            Sign In
          </button>
        </div>
        <div className="form-text">
          Don't Have an account? <a href="/signup"> Signup</a>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
