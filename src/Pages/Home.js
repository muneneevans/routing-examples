import React, { Component } from "react";
import AnimatedWrapper from "../AnimatedWrapper";

class Home extends Component {
  render() {
    return (
      <div className="page">
        <h1>Home</h1>
        <p>Hello from the home page.</p>
      </div>
    );
  }
}

export default AnimatedWrapper(Home);
