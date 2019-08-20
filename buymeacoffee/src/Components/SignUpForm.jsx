import React from "react";
import "./SignUpForm.css";
import InputField from "./InputField";
import { withRouter } from "react-router-dom";

const handleInputChange = event => {
  event.preventDefault();
  console.log("inhere");
};
const SignUpForm = props => {
  return (
    <div className="form-container">
      <div style={{ textAlign: "center" }}>
        <h1 className="form-text">Create an account</h1>
      </div>
      <div className="social-container">
        <i className="fab fa-facebook-square" />
        <i className="fab fa-google-plus-square" />
        <i className="fab fa-twitter-square" />
      </div>
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        or use your email for registration
      </div>
      <form autocomplete="off">
        <InputField
          name="name"
          type="text"
          placeholder="Name"
          handleInputChange={handleInputChange}
        />
        <InputField
          className="input-clicked"
          name="email"
          type="text"
          placeholder="Email"
          required
          handleInputChange={handleInputChange}
        />
        <InputField
          className="input-clicked"
          name="password"
          type="password"
          placeholder="Password"
          required
          handleInputChange={handleInputChange}
        />
        <InputField
          className="input-clicked"
          name="confirmpassword"
          type="password"
          placeholder="Confirm Password"
          required
          handleInputChange={handleInputChange}
        />
        <div>
          <input type="checkbox" />{" "}
          <label>
            You agree to our <a href="/terms">Terms of Use</a>
          </label>
        </div>
        <div>
          <button type="submit" className="create-account-button">
            Create Account
          </button>
        </div>
      </form>
      <div className="form-text">
        Already Have an account? <a href="/login"> login</a>
      </div>
    </div>
  );
};

export default withRouter(SignUpForm);
