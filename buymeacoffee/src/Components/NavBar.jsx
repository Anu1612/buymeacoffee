import React from "react";
import { Navbar } from "react-bootstrap";
import coffeeMug from "../Assest/kawaii-coffee-mug-cartoon-vector-23675241.jpg";
import "./NavBar.css";
import Links from "./Links";
import { withRouter } from "react-router-dom";

const Nav = props => {
  return (
    <Navbar className="NavBar" sticky="top">
      <Navbar.Brand>
        <div
          className="logo-text"
          onClick={() => props.history.push({ pathname: "/" })}
        >
          {" "}
          <img src={coffeeMug} width="25%" /> buy me a coffee
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Links />
    </Navbar>
  );
};

export default withRouter(Nav);
