import React from "react";
import { Navbar } from "react-bootstrap";
import coffeeMug from "../Assest/kawaii-coffee-mug-cartoon-vector-23675241.jpg";
import "./NavBar.css";
import Links from "./Links";

const Nav = props => {
  return (
    <Navbar className="NavBar">
      <Navbar.Brand>
        <div className="logo-text">
          {" "}
          <img src={coffeeMug} width="25%" /> buy me a coffee
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Links />
    </Navbar>
  );
};

export default Nav;
