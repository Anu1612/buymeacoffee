import React from "react";
import "./SignUpForm.css";
import { withRouter } from "react-router-dom";

const handleInputChange = event => {
  event.preventDefault();
  console.log("inhere");
};
const SignUpForm = props => {
  return (
    <div className="form-container">
      <h1 className="form-text">Create an account</h1>
      <form>
        <div>
          <input
            className="input-clicked"
            name="name"
            type="text"
            placeholder="Name"
            required
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            className="input-clicked"
            name="email"
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            className="input-clicked"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <input
            className="input-clicked"
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </div>
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
