import React, { Component } from "react";
import { Navbar, Form, Button } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import Body from "../Components/Body";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Body />
      </React.Fragment>
    );
  }
}

export default App;
