import React, { Component } from "react";
import AnimatedWrapper from "../AnimatedWrapper";

class SubPage extends Component {
  render() {
    return (
      <div className="page">
        <h1>Sub Page</h1>
        <p>Hello from a subpage</p>
      </div>
    );
  }
}

export default AnimatedWrapper(SubPage);
