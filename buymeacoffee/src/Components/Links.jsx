import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Links = props => {
  return (
    <Navbar.Collapse className="justify-content-end mr-4 nav-bar-right-text">
      <Navbar.Text className="mr-4">
        <a href="/creators">Explore Creators</a>
      </Navbar.Text>
      <Navbar.Text className="mr-4">
        <a href="/Login">Login</a>
      </Navbar.Text>
      <button
        className="create-button"
        onClick={() => props.history.push({ pathname: "/signup" })}
      >
        Start my Page
      </button>
    </Navbar.Collapse>
  );
};

export default withRouter(Links);
