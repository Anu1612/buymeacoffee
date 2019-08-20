import React from "react";
import "./App.css";
import LandingPage from "./Containers/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Containers/SignUp";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Containers/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" basename="buymeacoffee" exact component={LandingPage} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
      </div>
    </Router>
  );
}

export default App;
